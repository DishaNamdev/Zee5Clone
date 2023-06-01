import React from "react";
import "./videoDesc.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncVideos,
  getAllVideos,
} from "../../features/movies/videoSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoDetails } from "../../features/movies/videoSlice";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function VideoDesc() {
  const videoID = useParams();
  const dispatch = useDispatch();

  const allVideos = useSelector(getAllVideos);


  const [myvideo, setMyVideo] = useState({});
  const [videoPlayer, setVideoPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  let resultant = {};

  // console.log("data of allVideo", allVideos);

  useEffect(() => {
    console.log("Inside useEffect");
    dispatch(fetchAsyncVideos());
    setMyVideo(allVideos);


    for (let i = 0; allVideos && i < allVideos.length; i++) {
      if (allVideos[i].id.videoId === videoID.videoId) {
        resultant = allVideos[i];
        setMyVideo(resultant);
        break;
      }
    }

    setMyVideo(resultant);
  }, []);

  // console.log("My data from videodesc", myvideo);

  const youtubevideoHandler = () => {
    setVideoPlayer(true);
    setVideoUrl(`https://www.youtube.com/watch?v=${videoID.videoId}`);
  };

  const closeVideoHandler = () => {
    setVideoPlayer(false);
  };

  return (
    <>
      {Object.keys(myvideo).length === 0 ? (
        <div className="loading-text">Loading Content....</div>
      ) : (
        myvideo && (
          <div className="desc-container">
            <div className="videoDesc-title">{myvideo.snippet.title}</div>
            <div className="videoDesc-container">
              <div className="videoDesc-left">
                <div className="videoDesc-channelName">
                  Channel: <span> {myvideo.snippet.channelTitle} </span>
                </div>
                <div className="videoDesc-description">
                  Descritpion:{" "}
                  {myvideo.snippet.description.length === 0 ? (
                    <p>
                       <span>No Description</span>
                    </p>
                  ) : (
                    <span>{myvideo.snippet.description}</span>
                  )}
                </div>
                {videoPlayer && (
              <>
                <div className="videoPlayer-container">
                  <div className="videoholder">
                    <div className="closebtn-div">
                      <CloseIcon
                        className="videoPlayer-closeicon"
                        onClick={closeVideoHandler}
                      />
                    </div>

                    <ReactPlayer id="video" url={videoUrl} controls />
                  </div>
                </div>
              </>
            )}
              </div>
              <div className="videoDesc-right">
                <div></div>
                <div className="imageAndBtn-container">
                <img
                  src={myvideo.snippet.thumbnails.high.url}
                  alt="poster"
                  className="videoDesc-image"
                />
                       <button
                  className="play-video-btn"
                  onClick={youtubevideoHandler}
                >
                  Play <YouTubeIcon className="youtube-icon" />
                </button>
                </div>
                
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default VideoDesc;
