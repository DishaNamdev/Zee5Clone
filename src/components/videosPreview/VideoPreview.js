import React, { useEffect, useState } from "react";
import "./videopreview.css";
import VideoCard from "../videocard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../features/movies/videoSlice";

function VideoPreview() {
  // use useParams here

  const dispatch = useDispatch();
  const data = useSelector(getAllVideos);

  return (
    <div className="videopreview-container">
      {/* {Object.keys(data).length === 0 ? (
        <div> Loading..... </div>
      ) : (
        data.map((index, vi) => {
          <VideoCard key={index} data={vi} />;
        })
      )} */}
      {data && data.map((data, i) =><VideoCard key={data.id.videoId} data={data} /> )}
    </div>
  );
}

export default VideoPreview;
