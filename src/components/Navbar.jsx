import React, { useState } from "react";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className="navbar flex items-center justify-between p-4">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="h-8s" />
      </div>

      <div className="navbar-menu flex">
        <ul className="flex gap-6 text-2xl font-semibold">
          <li
            className={`cursor-pointer ${
              menu === "home" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => setMenu("home")}
          >
            home
          </li>
          <li
            className={`cursor-pointer ${
              menu === "menu" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => setMenu("menu")}
          >
            menu
          </li>
          <li
            className={`cursor-pointer ${
              menu === "mobile-app" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => setMenu("mobile-app")}
          >
            mobile-app
          </li>
          <li
            className={`cursor-pointer ${
              menu === "contact us" ? "text-blue-500 underline" : ""
            }`}
            onClick={() => setMenu("contact us")}
          >
            contact us
          </li>
        </ul>
      </div>

      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="Search Icon" className="h-6" />
        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="Basket Icon" className="h-6" />
          <div className="dot absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <button className="sign-in-button text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
