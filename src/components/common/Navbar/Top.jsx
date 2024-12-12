import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 shadow-sm">
      <div className="flex items-center gap-6">
        <Link to="/about-us">
          <h1 className="text-gray-700 hover:text-[#077e38] transition-colors duration-200">
            About Us
          </h1>
        </Link>
        <Link to="/account">
          <h1 className="text-gray-700 hover:text-[#077e38] transition-colors duration-200">
            My Account
          </h1>
        </Link>
        <Link to="/wishlist">
          <h1 className="text-gray-700 hover:text-[#077e38] transition-colors duration-200">
            Whishlist
          </h1>
        </Link>
        <Link to="/track-order">
          <h1 className="text-gray-700 hover:text-[#077e38] transition-colors duration-200">
            Track Order
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <h1 className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
          Need Help? Call Us:
          <span className="font-bold text-[#077e38] hover:text-[#056c2f] ml-2">
            +254 758939807
          </span>
        </h1>
        <h1 className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
          <span className="font-bold text-[#077e38] hover:text-[#056c2f]">
            24/7
          </span>{" "}
          online support
        </h1>
        <h1 className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
          <span className="font-bold text-[#077e38] hover:text-[#056c2f]">
            7 days a week
          </span>{" "}
          for support
        </h1>
      </div>
    </div>
  );
};

export default Top;
