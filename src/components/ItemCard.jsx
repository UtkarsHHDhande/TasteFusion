import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id, img, name, price, qty }));
    toast(`${name} Removed!`, {
      icon: "👋",
      className: 'font-medium'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 relative">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
      >
        <MdDelete size={20} />
      </button>

      <div className="flex gap-4 items-center">
        <img 
          src={img} 
          alt={name} 
          className="w-16 h-16 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h2 className="font-bold text-gray-800 mb-1">{name}</h2>
          
          <div className="flex items-center justify-between">
            <span className="text-green-600 font-bold">₹{price}</span>
            
            <div className="flex items-center gap-3">
              <QuantityButton
                onClick={() => qty > 1 && dispatch(decrementQty({ id }))}
                disabled={qty <= 1}
              >
                <AiOutlineMinus size={16} />
              </QuantityButton>

              <span className="font-medium w-6 text-center">{qty}</span>

              <QuantityButton
                onClick={() => dispatch(incrementQty({ id }))}
              >
                <AiOutlinePlus size={16} />
              </QuantityButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuantityButton = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      p-1.5 rounded-lg transition-all duration-200
      ${disabled 
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
        : 'bg-gray-100 text-gray-600 hover:bg-green-500 hover:text-white active:scale-95'
      }
    `}
  >
    {children}
  </button>
);

export default ItemCard;
