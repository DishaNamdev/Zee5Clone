import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import userimage from "../../assets/userimg.png";
import logo from "../../assets/header-logo.jpeg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function Header({ searchTextHandler }) {
  
  // console.log(searchTextHandler);
  const [dropdown, setDropDown] = useState();
  const [searchResult,setSearchResult] = useState("");
  const auth = getAuth();
  const history = useHistory();

  history.push("/home");
  const dropdownHandler = () => {
    setDropDown(prev => !prev);
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
        alert("Signed Out successfully!!");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setDropDown(false);
  };

  const searchResultHandler = ()  =>{
    searchTextHandler(searchResult);
  }

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="" className="headerLogo" />
      </div>
      <div className="header-middle">
        <ul className="header-items">
         <Link to ="/home">  <li className="item">Home</li> </Link> 
          <li className="item">Tv Shows</li>
          <li className="item">Movies</li>
          <li className="item">Web Series</li>
          <li className="item">News</li>
          <li className="item">Premium</li>
          <li className="item">Live TV</li>
        </ul>
        <div className="searchbar">
          <form action="submit">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(event) => {
                console.log("Inside onchange header.js",event.target.value);
                setSearchResult(event.target.value);
              }}
            />
            <span className="submit-btn">
              <SearchIcon className="searchIcon" onClick={searchResultHandler} />
            </span>
          </form>
        </div>
      </div>
      <div className="header-right">
        <img src={userimage} alt="user image" onClick={dropdownHandler} />
        {dropdown && (
          <ul className="dropdown-header">
            <li onClick={logoutHandler}>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
