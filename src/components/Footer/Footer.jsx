import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white py-8" id="footer">
      <div className="footer-content max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" className="mb-4 w-32" />
          <p className="text-sm leading-relaxed">
            Food for us comes from our relatives, whether they have wings or
            fins or roots. That is how we consider food. Food has a culture. It
            has a history. It has a story. It has relationships.
          </p>
          <div className="footer-social-icons flex space-x-4 mt-4">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        <div className="footer-content-center">
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Delivery</li>
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li className="text-sm">3544 Example Street, City Name</li>
            <li className="text-sm">contact@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
