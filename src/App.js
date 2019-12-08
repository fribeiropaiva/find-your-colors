import React from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ColorsRecognition from "./components/ColorsRecognition/ColorsRecognition";
import "./App.scss";

function App() {
  return (
    <main className="App">
      <ImageLinkForm />
      <ColorsRecognition />
    </main>
  );
}

export default App;
