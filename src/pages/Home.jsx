import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Footer from "../components/Footer";  // Add this import

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="max-w-screen-xl mx-auto flex-grow">
        <div className="space-y-8">
          <CategoryMenu />
          <FoodItems />
        </div>
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default Home;
