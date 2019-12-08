import React from "react";
import "./ColorsRecognition.scss";
import apple from "./apple.png";

const ColorsRecognition = () => {
  return (
    <main className="ColorsRecognition">
      <section className="img">
        <img src={apple} />
      </section>
      <section className="colors">
        <ul className="colors-list">
          <li>color 1</li>
          <li>color 2</li>
          <li>color 3</li>
          <li>color 4</li>
        </ul>
      </section>
    </main>
  );
};

export default ColorsRecognition;
