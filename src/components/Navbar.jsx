import React from "react";
import Icon from "../assets/Icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex border space-x-8 pl-2 py-5 items-center w-full h-[10vh]">
      <img src={Icon} alt="Movie Reel Icon" className="w-[50px]" />
      <Link className="text-2xl text-blue-400 font-bold " to="/">
        HOME
      </Link>
      <Link className="text-2xl text-blue-400 font-bold " to="/watchlist">
        WATCHLIST
      </Link>
    </div>
  );
}

export default Navbar;
