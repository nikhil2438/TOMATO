//
import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="app-download bg-gray-100 text-center py-8 px-4"
      id="app-download"
    >
      <p className="text-xl font-semibold mb-6">
        For a better experience, download <br />
        <span className="text-red-500 font-bold">TOMATO APP</span>
      </p>
      <div className="app-download-platforms flex flex-col items-center space-y-4">
        <img
          src={assets.play_store}
          alt="Download on Google Play Store"
          className="w-40 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src={assets.app_store}
          alt="Download on Apple App Store"
          className="w-40 cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default AppDownload;
