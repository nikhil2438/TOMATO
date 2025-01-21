import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        src="/header_img.png"
        alt="Banner"
        className="w-full  h-[400px] object-cover"
      />
      <div className="text-center text-white text-3xl p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p>Choose from a variety of menus.</p>
        <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
