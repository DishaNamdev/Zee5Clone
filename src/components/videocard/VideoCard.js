import React from "react";
import "./videocard.css";
import image from "../../assets/image1.jpg";

function VideoCard({data}) {
  // const { data } = props;
  console.log("this is my data********8", data);

  return (
    <div className="videocard-container">
      {/* <div className="videocard-imgsec"> */}
      <img src={image} alt="" />
      {/* </div> */}
      <p className="videocard-desc">
        {data?.snippet.title}
        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem ab rem quod est. Inventore? */}
        
      </p>
    </div>
  );
}

export default VideoCard;
