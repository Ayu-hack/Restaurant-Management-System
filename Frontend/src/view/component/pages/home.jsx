import React from 'react'
import { useState } from 'react';
import {Cart,Itemframes,Customers} from '../../imports';
import axios from 'axios';



function Home ({}) {

    
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
            // Ensure the quantity doesn't go below zero
            const finalQuantity = Math.max(newQuantity, 0);
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
      try{
        await axios.post('http://localhost:3000/placeorder', [order])
      }catch(error){
        console.error(error)
      }
      
      clearcart();
      alert("Order Placed Successfully \nThank You for Ordering");
      }

    function checker(){
      if(cartItems.length === 0){
        alert("Please add items to cart first");
      }else{
        openModal();
      }
    }

    function clearcart(){
      setCartItems([]);
    }
      
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 overflow-hidden">
    <div className="container mx-auto p-4">
        <Itemframes addToCart={addToCart} />
        <button onClick={clearcart}>clear</button>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        {isModalOpen ? (isModalOpen && (<Customers isOpen={isModalOpen} onClose={closeModal} onSubmit={placeOrder} cartItems={cartItems} />)):
        <div className="flex justify-center mt-3">
        <button
            onClick={checker}
            className="w-2/4 md:w-1/3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
            Confirm
        </button>
    </div>}

    </div>
</div>

  )
}

export default Home
