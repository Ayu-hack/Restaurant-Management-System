import React from 'react'
import data from '../../assets/item.json'

const ItemFrames = ({ addToCart }) => {
  const items = data.menuItems

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
        </div>
      ))}
    </div>
  )
}

export default ItemFrames
