import React, { useState } from 'react';
import { Cart, Itemframes, Customers } from '../../imports';
import axios from 'axios';
import { useDarkMode } from '../../context/DarkModeContext'; // Import dark mode context

function Home() {
  const { darkMode } = useDarkMode(); // Access dark mode state
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCart = (item, quantityToAdd = 1) => {
    if (cartItems.some((cartItem) => cartItem.id === item.id)) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          const newQuantity = cartItem.Quantity + quantityToAdd;
          const finalQuantity = Math.max(newQuantity, 0); // Ensure the quantity doesn't go below zero
          return { ...cartItem, Quantity: finalQuantity };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, Quantity: quantityToAdd }]);
    }
  };

  async function placeOrder(order) {
    try {
      await axios.post('http://localhost:3000/placeorder', [order]);
      clearcart();
      alert("Order Placed Successfully \nThank You for Ordering");
    } catch (error) {
      console.error(error);
    }
  }

  function checker() {
    if (cartItems.length === 0) {
      alert("Please add items to cart first");
    } else {
      openModal();
    }
  }

  function clearcart() {
    setCartItems([]);
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} overflow-hidden`}>
      <div className="container mx-auto p-4">
        <Itemframes addToCart={addToCart} />
        <div className="flex justify-center items-center">
          <button
            onClick={clearcart}
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300`}
          >
            Clear
          </button>
        </div>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        {isModalOpen ? (
          <Customers
            isOpen={isModalOpen}
            onClose={closeModal}
            onSubmit={placeOrder}
            cartItems={cartItems}
          />
        ) : (
          <div className="flex justify-center mt-3">
            <button
              onClick={checker}
              className="w-2/4 md:w-1/3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
