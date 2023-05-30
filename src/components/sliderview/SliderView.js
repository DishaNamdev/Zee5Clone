import React from "react";
import { Link } from "react-router-dom";
import "./sliderview.css";

function SliderView({ props }) {

  return (
    <Link to={`/video/${props.id.videoId}`}>
      <div className="sliderview-container">
        <div className="inside-container">
          <p className="slide-title">{props.snippet.title}</p>
          <img
            className="slide-image"
            src={props.snippet.thumbnails.high.url}
            alt="poster image"
          /> 
        </div>
      </div>
    </Link>
  );
}

export default SliderView;
