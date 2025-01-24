import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Fooditem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="food-item-img-container relative">
        <img
          className="food-item-image w-full h-48 object-cover"
          src={image}
          alt={`Image of ${name}`}
        />

        {!itemCount ? (
          <img
            className="absolute bottom-2 right-2 w-10 cursor-pointer"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_green}
            alt="Add Icon"
          />
        ) : (
          <div className="food-item-counter absolute bottom-2 right-2 bg-gray-100 p-2 rounded-full flex items-center gap-2">
            <img
              className="w-8 cursor-pointer"
              onClick={() => setItemCount((prev) => (prev > 0 ? prev - 1 : 0))}
              src={assets.remove_icon_red}
              alt="Remove Icon"
            />
            <p className="text-lg font-semibold text-gray-800">{itemCount}</p>
            <img
              className="w-8 cursor-pointer"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt="Add Icon"
            />
          </div>
        )}
      </div>

      <div className="food-item-info p-4">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <img className="w-16" src={assets.rating_starts} alt="Rating Stars" />
        </div>

        <p className="food-item-desc text-sm text-gray-600 mb-4">
          {description}
        </p>

        <p className="food-item-price text-lg font-bold text-green-600">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Fooditem;
