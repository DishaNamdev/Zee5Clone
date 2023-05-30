import React from "react";
import "./videocard.css";
import { Link } from "react-router-dom";

function VideoCard({ data }) {
 
  console.log("this is my data********8", data);

  return (
    <Link className="videocard-link" to={`/video/${data.id.videoId}`}>
      <div className="videocard-container">
      <img src={data?.snippet.thumbnails.high.url} alt="" />

      <div className="videocard-desc">
        <p className="vidoecard-desc-channelName">
          {data.snippet.channelTitle}
        </p>
        <p>{data.snippet.title}</p>
      </div>
    </div>
    </Link>
    
  );
}

export default VideoCard;
