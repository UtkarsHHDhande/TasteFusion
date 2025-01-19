import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white shadow-2xl 
        ${activeCart ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-2xl font-bold text-gray-800">My Order</span>
            <button
              onClick={() => setActiveCart(!activeCart)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <IoMdClose className="text-2xl text-gray-600 hover:text-red-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((food) => (
                  <ItemCard
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    img={food.img}
                    qty={food.qty}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <FaShoppingCart className="text-6xl text-gray-300" />
                <h2 className="text-xl font-semibold text-gray-500">
                  Your cart is empty
                </h2>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-800">
                <span className="font-medium">Total Items</span>
                <span className="font-bold">{totalQty}</span>
              </div>
              <div className="flex justify-between text-gray-800">
                <span className="font-medium">Total Amount</span>
                <span className="font-bold">₹{totalPrice}</span>
              </div>
            </div>
            <button
              onClick={() => navigate("/success")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg
              transition-colors duration-200 transform active:scale-95"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Cart Toggle Button */}
      <button
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 
        text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110
        ${totalQty > 0 && "animate-bounce"}`}
      >
        <FaShoppingCart className="text-2xl" />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalQty}
          </span>
        )}
      </button>
    </>
  );
};

export default Cart;
