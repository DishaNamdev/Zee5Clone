import "./App.css";
// import Login from "./pages/login/Login";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/header/Header";
import VideoCard from "./components/videocard/VideoCard";
import VideoPreview from "./components/videosPreview/VideoPreview";
import Home from "./pages/home/Home";

import { Carousel } from "react-responsive-carousel";

function App() {
  return (
      <div>
        <Home/>
        {/* <Header/> */}
      </div>
  );
}

export default App;
