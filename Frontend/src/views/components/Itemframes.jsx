import React from 'react';
import data from '../../assets/item.json';
import { useDarkMode } from '../../context/DarkModeContext'; // Import dark mode context

const ItemFrames = ({ addToCart }) => {
  const items = data.menuItems;
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`menu-item p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-lg 
            ${darkMode ? 'bg-gray-800 text-white shadow-lg' : 'bg-white text-black shadow-md'}`}
        >
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
          <p className="text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}">₹ {item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className={`mt-4 px-4 py-2 rounded-lg transition duration-200 transform focus:outline-none focus:ring-2
              ${darkMode ? 'bg-pink-600 text-white hover:bg-pink-500' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemFrames;
