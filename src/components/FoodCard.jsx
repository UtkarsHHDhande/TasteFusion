import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative overflow-hidden group">
        <img
          src={img}
          alt={name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-lg">
          <span className="flex items-center text-sm font-semibold text-gray-700">
            <AiFillStar className="text-yellow-400 mr-1" />
            {rating}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800 truncate">{name}</h2>
          <span className="text-green-600 font-bold">₹{price}</span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {desc}
        </p>

        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg
          transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
