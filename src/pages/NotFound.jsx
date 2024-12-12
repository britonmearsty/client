import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Not Found</h2>
        <p className="text-gray-600 mb-2">
          The page you are looking for does not exist.
        </p>
        <p className="text-gray-600 mb-6">
          Please check the URL and try again.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#33bb77e5] text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
