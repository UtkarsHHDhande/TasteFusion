import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Brand and Date */}
          <div className="space-y-1">
            <h3 className="text-gray-600 font-medium text-sm sm:text-base">
              {new Date().toUTCString().slice(0, 16)}
            </h3>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
              TasteFusion
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search your favorite food..."
              autoComplete="off"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="w-full sm:w-[300px] md:w-[350px] pl-10 pr-4 py-2 sm:py-3 rounded-full
                border border-gray-200 focus:border-green-500 focus:ring-2 
                focus:ring-green-200 transition-all duration-200
                text-gray-800 placeholder-gray-400 text-sm outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
