import React, { useEffect } from "react";
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

// const data = [
//   {
//     id: 1,
//     label: "lorem ipsum 2",
//     imgPath: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
//   },
//   {
//     id: 2,
//     label: "Disha is Great",
//     imgPath:
//       "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 3,
//     label: "I am Great",
//     imgPath:
//       "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ];

function Home() {
  const videosArr = useSelector(getAllVideos);
  console.log("this is video arrray from Home.js", videosArr);
  const videoText = "codeWithHarry";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncVideos(videoText));
  }, [dispatch]);

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
      {/* <Slider {...Settings}>
        {data.map((item) => {
          return <SliderView key={item.id} props={item} />;
        })}
      </Slider> */}
      {Object.keys(videosArr).length === 0 ? (
        <div>Loading.....</div>
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
