import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  
  const handleToast = (name) => toast.success(`Added ${name}`, {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

  const filteredFoodData = FoodData.filter((food) => {
    const searchMatch = food.name.toLowerCase().includes(search.toLowerCase());
    return category === "All" ? searchMatch : (category === food.category && searchMatch);
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          className: 'text-sm'
        }}
      />

      {filteredFoodData.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold text-gray-600">
            No items found matching your criteria
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoodData.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodItems;
