import React, { useEffect, useState } from "react";
import "./videopreview.css";
import VideoCard from "../videocard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../features/movies/videoSlice";
function VideoPreview() {
  // use useParams here

  const dispatch = useDispatch();
  const data = useSelector(getAllVideos);
  const [userData, setUserdata] = useState(data)
  // console.log("This is my data title",data[1].snippet.title);


  // const {title} = data[1].snippet;
  // console.log(title);
  

  // useEffect here to show the details of a particular video here.

  return (
    <div className="videopreview-container">
      {/* {Object.keys(data).length === 0 ? (
        <div> Loading..... </div>
      ) : (
        data.map((index, vi) => {
          <VideoCard key={index} data={vi} />;
        })
      )} */}
      {data&&

        data.map((data,i)=>(<VideoCard key={i+data} data={data}/>)
        )
      }

      {/* <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/> */}
    </div>
  );
}

export default VideoPreview;
