import React from "react";
import "./ImageLinkForm.scss";

const ImageLinkForm = () => {
  return (
    <section className="ImageLinkForm">
      <input
        className="img-input"
        type="text"
        placeholder="Enter an image URL"
      />
      <button className="detect-btn">Detect Colors</button>
    </section>
  );
};

export default ImageLinkForm;
