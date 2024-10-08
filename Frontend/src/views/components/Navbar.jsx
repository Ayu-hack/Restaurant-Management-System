import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex justify-between items-center shadow-lg">
      <div className="text-white text-3xl font-extrabold tracking-wide">
        <h2 className="cursor-pointer transform hover:scale-105 transition duration-300">
          MyApp
        </h2>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-110 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-110 hover:underline"
          >
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
