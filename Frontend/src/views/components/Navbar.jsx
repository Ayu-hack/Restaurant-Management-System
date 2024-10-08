import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <h2>MyApp</h2>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:text-pink-400 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="text-white hover:text-pink-400 transition duration-300"
          >
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
