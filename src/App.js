import { useState, useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import VideoDescription from "./components/videoDesc/VideoDesc";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./common/firebase";
import SignoutHeader from "./components/signoutHeader/SignoutHeader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  // const[isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [authUser, setAuthUser] = useState();

  const [searchtext, setSearchText] = useState("");

  const searchTextHandler = (text) => {
    // console.log("Displaying search value from App.js", text);
    setSearchText(text);
  };


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user); // if the user details comes here then this user is authenticated.
      setAuthUser(user);
      if (user) {
        // agr user h that means tht is authenticated
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  

  return (
    <div className="App">
      <Router>
        {authUser ? (
          <Header searchTextHandler={searchTextHandler} className="header" />
        ) : (
          <SignoutHeader />
        )}

        <div className="container">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home">
              <Home searchtext={searchtext} />
            </Route>
            <Route path="/video/:videoId" component={VideoDescription} />
            <Route path="/register" component={Register} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
