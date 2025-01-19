import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const location = useLocation();

  return cartItems.length > 0 ? (
    <div className="animate-fadeIn">
      {element}
    </div>
  ) : (
    <Navigate 
      to="/" 
      state={{ from: location }} 
      replace 
      className="animate-fadeOut"
    />
  );
};

export default ProtectedRoute;
