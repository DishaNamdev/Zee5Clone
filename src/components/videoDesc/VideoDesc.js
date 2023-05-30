import React from "react";
import "./videoDesc.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncVideos,
  getAllVideos,
} from "../../features/movies/videoSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAsyncVideoDetails } from "../../features/movies/videoSlice";
import { getVideoDetails } from "../../features/movies/videoSlice";

function VideoDesc() {
  const videoID = useParams();
  const dispatch = useDispatch();

  const clickedVideo = useSelector(getVideoDetails);
  const allVideos = useSelector(getAllVideos);

  const [myvideo, setMyVideo] = useState({});
  const [singleVideo, setSingleVideo] = useState({});

  useEffect(() => {
    console.log("Inside useEffect");

    dispatch(fetchAsyncVideos());
    dispatch(fetchAsyncVideoDetails(videoID));

    // just checking
    // for (let i = 0; i < allVideos.length; i++) {
    //   if (allVideos[i].id.videoId === videoID) {
    //     resultant = allVideos[i];
    //     setMyVideo(resultant);
    //     break;
    //   }
    // }
    setMyVideo(allVideos);
    setSingleVideo(clickedVideo);
  }, [clickedVideo]);

  console.log("My video details", clickedVideo); // why undefined

  console.log("My data from videodesc", myvideo); // why undefined

  const resultant = "";

  const youtubevideoHandler = () => {
    window.location.replace(`https://www.youtube.com/watch?v=${videoID}`);
  };

  return (
    <>
      {
          clickedVideo &&     
          <div className="videoDesc-container">
          <div className="videoDesc-left">
            <div className="videoDesc-title">{clickedVideo.snippet.title}</div>
            <div className="videoDesc-channelName">
              Channel: <span> {clickedVideo.snippet.channelTitle} </span>
            </div>
            <div className="videoDesc-description">
              {clickedVideo.snippet.description}
            </div>
          </div>
          <div className="videoDesc-right">
            <img
              src={clickedVideo.snippet.thumbnails.medium.url}
              alt="poster"
              className="videoDesc-image"
            />
          </div>
          <button className="videoDesc-playBtn" onClick={youtubevideoHandler}>PLAY</button>
        </div>
      }
    </>


  );
}

export default VideoDesc;

/**
 * I have two options now
 * 1) first is to get all the videos and then apply the for loop and find that particular video
 * 2) directly get the data for that particular video using api call
 */
