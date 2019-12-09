import React from "react";
import "./ColorsRecognition.scss";

const ColorsRecognition = ({ img, colors }) => {
  return (
    <section className="ColorsRecognition">
      <section className="img">
        <img src={img} />
      </section>
      <section className="colors">
        <ul className="colors-list">{colors}</ul>
      </section>
    </section>
  );
};

export default ColorsRecognition;
