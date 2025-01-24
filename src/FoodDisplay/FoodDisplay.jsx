import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Fooditem from "../components/Fooditem/Fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2 className="text-2xl font-bold mt-4">Top dishes near you</h2>
      <div
        className="food-display-list   grid grid-cols-4 gap-6
       "
      >
        {food_list.map((item, index) => {
          return (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
