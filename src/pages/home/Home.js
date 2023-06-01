import React, { useEffect, useState } from "react";
import VideoPreview from "../../components/videosPreview/VideoPreview";
import SliderView from "../../components/sliderview/SliderView";
import Header from "../../components/header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncVideos,
  getAllVideos,
} from "../../features/movies/videoSlice";

function Home({ searchtext }) {
  console.log("Inside home component search value", searchtext);
  const videosArr = useSelector(getAllVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncVideos(searchtext));
  }, [searchtext]);

  /***********************************************************/
  const Settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    lazyLoad: true,
    className: "slides",
  };
  return (
    <div>
      {Object.keys(videosArr || {}).length === 0 ? (
        <div className="loading-text">Loading Content....</div>
      ) : (
        <>
          <Slider {...Settings}>
            {videosArr.map((item) => (
              <SliderView key={item.id.videoId} props={item} />
            ))}
          </Slider>
          <p className="heading">Top 20 Videos of YouTube</p>
          <VideoPreview className="home-videoPreview" />
        </>
      )}
    </div>
  );
}

export default Home;
