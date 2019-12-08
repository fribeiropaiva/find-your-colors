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

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setIsDetecting(!isDetecting);
  };

  useEffect(() => {
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/colorful-background-design-template-f7d5ea9cc27d1719dfa78f67b1e00dfc_screen.jpg?ts=1561389258"
      )
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, [isDetecting]);

  return (
    <main className="App">
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ColorsRecognition />
    </main>
  );
}

export default App;
