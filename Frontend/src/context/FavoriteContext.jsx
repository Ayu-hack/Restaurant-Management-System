import React, { createContext, useContext, useState } from 'react';

export const FavoriteContext = createContext(); // Export FavoriteContext

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (item) => {
    setFavoriteItems((prev) => [...prev, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const toggleFavorite = (item) => {
    if (favoriteItems.some(fav => fav.id === item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoriteContext);
};
