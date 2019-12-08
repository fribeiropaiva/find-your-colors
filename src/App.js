import React, { useState, useEffect } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ColorsRecognition from "./components/ColorsRecognition/ColorsRecognition";
import Clarifai from "clarifai";
import "./App.scss";

const API_KEY = process.env.REACT_APP_CLARIFAI_KEY;

const app = new Clarifai.App({
  apiKey: API_KEY
});

function App() {
  const [input, setInput] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [colorData, setColorData] = useState(null);

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setIsDetecting(!isDetecting);
    setImgUrl(input);
  };

  useEffect(() => {
    if (isDetecting) {
      app.models
        .predict(Clarifai.COLOR_MODEL, imgUrl)
        .then(response => {
          const colors = response.outputs[0].data.colors.map(color => {
            let colorBox = {
              background: color.raw_hex,
              width: "50px",
              height: "50px"
            };
            return (
              <div className="list-item">
                <li>{color.raw_hex}</li>
                <div style={colorBox}></div>
              </div>
            );
          });
          setColorData(colors);
        })
        .catch(err => console.log(err));
    }
  }, [imgUrl]);

  return (
    <main className="App">
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ColorsRecognition img={imgUrl} colors={colorData} />
    </main>
  );
}

export default App;
