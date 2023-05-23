import React from "react";
import "./sliderview.css";

function SliderView({ props }) {
  // console.log("props: ", props);
  return (
    <div className="sliderview-container">
      <div className="inside-container">
        <p className="slide-title">{props.label}</p>
        <img className="slide-image" src={props.imgPath} alt="poster image" />
      </div>
    </div>
  );
}

export default SliderView;
