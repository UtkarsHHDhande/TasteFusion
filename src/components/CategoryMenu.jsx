import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">
        Find the Perfect Dish
      </h3>
      
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        <CategoryButton
          selected={selectedCategory === "All"}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </CategoryButton>

        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            selected={selectedCategory === category}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </CategoryButton>
        ))}
      </div>
    </div>
  );
};

const CategoryButton = ({ children, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-full font-medium text-sm
      transition-all duration-200 transform hover:scale-105
      ${selected 
        ? 'bg-green-500 text-white shadow-lg shadow-green-200' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }
      whitespace-nowrap
    `}
  >
    {children}
  </button>
);

export default CategoryMenu;
