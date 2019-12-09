import React from "react";
import "./ImageLinkForm.scss";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <section className="ImageLinkForm">
      <input
        className="img-input"
        type="text"
        placeholder="Enter an image URL"
        onChange={onInputChange}
      />
      <button className="detect-btn" onClick={onButtonSubmit}>
        Detect Colors
      </button>
    </section>
  );
};

export default ImageLinkForm;
