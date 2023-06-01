import React from 'react';
import Logo from "../../assets/header-logo.jpeg";
import "./signoutHeader.css";
function SignoutHeader() {
  return (
    <div className="SignoutHeader-container">
     
        <div className="headerright">
            <ul className='signout-header-items'>
            <li><img src={Logo} alt="" className="zee5Logo" /></li>
            {/* <li className="item-signout">Home</li>
            <li className="item-signout">Tv Shows</li>
            <li className="item-signout">Movies</li>
            <li className="item-signout">Web Series</li>
            <li className="item-signout">News</li>
            <li className="item-signout">Premium</li>
            <li className="item-signout">Live TV</li> */}
            </ul>
        </div>
    </div>
  )
}

export default SignoutHeader;
