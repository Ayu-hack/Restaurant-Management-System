import React, { useContext } from 'react';
import data from '../../assets/item.json';
import { FavoriteContext } from '../../context/FavoriteContext'; // Import FavoriteContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'; // Solid heart
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; // Regular heart

const ItemFrames = ({ addToCart }) => {
  const { favoriteItems, addToFavorites, removeFromFavorites } = useContext(FavoriteContext); // Use FavoriteContext
  const items = data.menuItems;

  const toggleFavorite = (item) => {
    if (favoriteItems.some(fav => fav.id === item.id)) {
      removeFromFavorites(item.id); // Remove from favorites if it exists
    } else {
      addToFavorites(item); // Add to favorites
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="menu-item bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
          <p className="text-lg font-medium text-gray-700">₹ {item.price}</p>
          
          <button
            onClick={() => addToCart(item)}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 hover:scale-110 transition duration-200 transform focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Add to Cart
          </button>
          
          <button
            onClick={() => toggleFavorite(item)} // Toggle favorite on button click
            className="mt-2 text-lg ml-2" // Add margin-left for spacing
            aria-label={favoriteItems.some(fav => fav.id === item.id) ? 'Unfavorite this item' : 'Favorite this item'}
          >
            <FontAwesomeIcon 
              icon={favoriteItems.some(fav => fav.id === item.id) ? faHeartSolid : faHeartRegular} 
              className={`transition duration-200 ${favoriteItems.some(fav => fav.id === item.id) ? 'text-red-500' : 'text-gray-300'}`} 
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemFrames;
