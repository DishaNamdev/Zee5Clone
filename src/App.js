import "./App.css";
// import Login from "./pages/login/Login";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/header/Header";
import VideoCard from "./components/videocard/VideoCard";
import VideoPreview from "./components/videosPreview/VideoPreview";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import VideoDescription from "./components/videoDesc/VideoDesc";
import { Carousel } from "react-responsive-carousel";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
          <Header className="header"/>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/video/:videoId" component={VideoDescription}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
        {/* <VideoDescription/> */}
      </div>
  );
}

export default App;
