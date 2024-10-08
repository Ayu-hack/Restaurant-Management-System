import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext'; // Import dark mode context

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.Quantity, 0);
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <div className={`cart p-6 rounded-lg shadow-md w-full max-w-md mx-auto transition duration-300
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>No items in cart.</p>
      ) : (
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr className={`text-left font-medium border-b ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <th className="py-2">Item Name</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.Quantity}x</td>
                  <td className="py-2">₹{item.price * item.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h3 className="text-xl font-semibold mt-4">Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
