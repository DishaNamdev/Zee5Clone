import "./videopreview.css";
import VideoCard from "../videocard/VideoCard";
import {  useSelector } from "react-redux";
import { getAllVideos } from "../../features/movies/videoSlice";

function VideoPreview() {

  const data = useSelector(getAllVideos);

  return (
    <div className="videopreview-container">
      {data && data.map((item) =><VideoCard key={item.id.videoId} data={item} /> )}
    </div>
  );
}

export default VideoPreview;
