// Import necessary components and hooks from React and Lucide
import {
  ArrowBigDownIcon,
  GitCompareArrows,
  Heart,
  LocateFixedIcon,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Middle component for the e-shop header/search section
const Middle = () => {
  // State to handle category dropdown visibility
  const [showCategory, setshowCategory] = useState(false);
  //login confirmation
  const [loggedIn, setLoggedIn] = useState(false);
  // Toggle category dropdown visibility
  const handleShowCategory = () => {
    setshowCategory(!showCategory);
  };

  return (
    // Main container with flex layout
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      {/* Shop logo/title */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-[#1cbd5f]">Brme| e-shop</h1>
      </Link>
      {/* Search and category section */}
      <div className="flex items-center border-2 border-[#33e77e59] rounded-lg px-3 py-2 w-1/3 hover:border-[#1cbd5f] transition-colors">
        {/* Category dropdown button */}
        <div className="flex items-center p-2 space-x-2 border-r border-gray-200">
          <button
            onClick={handleShowCategory}
            className="flex items-center gap-2 hover:text-[#1cbd5f]">
            Categories <span className="text-xs">▼</span>
          </button>
        </div>
        {/* Search input and button */}
        <div className="flex flex-1 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 w-full focus:outline-none"
          />
          <button className="hover:text-[#1cbd5f] transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>
      {/* location button start */}
      <div className="flex items-center p-2">
        <button className="flex items-center gap-2 hover:bg-gray-50 border-2 border-[#33e77e59] rounded-lg p-2 transition-colors">
          <LocateFixedIcon size={16} />
          Location <span className="text-xs">▼</span>
        </button>
      </div>
      {/* location button ends here */}
      {/* cart starts here */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <button className="flex gap-2 items-center hover:text-[#1cbd5f] transition-colors relative group">
            <GitCompareArrows
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-medium">Compare</span>
          </button>
          <button className="flex gap-2 items-center hover:text-[#1cbd5f] transition-colors relative group">
            <Heart
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-medium">Wishlist</span>
            <p className="absolute -top-4 -right-2 text-white bg-[#1cbd5f] w-5 h-5 text-xs rounded-full flex items-center justify-center animate-pulse">
              0
            </p>
          </button>
          <button className="flex gap-2 items-center hover:text-[#1cbd5f] transition-colors relative group">
            <ShoppingCart
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-medium">Cart</span>
            <p className="absolute -top-4 -right-2 text-white bg-[#1cbd5f] w-5 h-5 text-xs rounded-full flex items-center justify-center animate-pulse">
              10
            </p>
          </button>
        </div>
        {/* cart ends here */}
        {/* login/logout button */}
        {loggedIn ? (
          <button
            onClick={() => setLoggedIn(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-10 h-10 text-white bg-[#1cbd5f] rounded-full p-2" />
          </button>
        ) : (
          <button
            className="bg-[#1cbd5f] hover:bg-[#18a351] text-white py-2 px-6 rounded-lg font-medium transition-colors"
            onClick={() => setLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Middle;
