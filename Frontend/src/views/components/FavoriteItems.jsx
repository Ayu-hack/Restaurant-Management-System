import React, { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';

const FavoriteItems = () => {
  const { favoriteItems } = useContext(FavoriteContext); // Change 'favorites' to 'favoriteItems'

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Favorite Items</h2>
      {favoriteItems.length === 0 ? (
        <p className="text-gray-500">No favorite items.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {favoriteItems.map((item, index) => (
            <div key={index} className="menu-item bg-white shadow-lg rounded-lg p-4">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
              <p className="text-lg font-medium text-gray-700">₹ {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteItems;
