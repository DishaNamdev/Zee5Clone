import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import userimage from "../../assets/userimg.png";
import logo from "../../assets/header-logo.jpeg";
function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="" className="headerLogo" />
      </div>
      <div className="header-middle">
        <ul className="header-items">
          <li className="item">Home</li>
          <li className="item">Tv Shows</li>
          <li className="item">Movies</li>
          <li className="item">Web Series</li>
          <li className="item">News</li>
          <li className="item">Premium</li>
          <li className="item">Live TV</li>
        </ul>
        <div className="searchbar">
          <form action="submit">
            <input type="text" className="search-input" placeholder="Search" />
            <span className="submit-btn">
              <SearchIcon className="searchIcon" />
            </span>
          </form>
        </div>
      </div>
      <div className="header-right">
        <img src={userimage} alt="user image" />
      </div>
    </div>
  );
}

export default Header;
