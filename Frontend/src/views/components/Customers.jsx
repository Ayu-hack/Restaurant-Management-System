import React from 'react'
import { useState } from 'react';
const Customers = ({isOpen,onClose,onSubmit,cartItems}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [tableNo, setTableNo] = useState('');

    const handleSubmit = () => {
        // Validate input (you can add more validation logic here)
        if (!name || !phone || !tableNo) {
            alert('Please fill in all fields.');
            return;
        }

        // Pass data to onSubmit callback
        onSubmit({ "CustomerName": name, "ContactNumber": phone, "TableNumber": tableNo, "Cart": cartItems });
        onClose();
    };

    return (
        <div className={`modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${isOpen ? 'open' : 'hidden'}`}>
        <div className="bg-white rounded-lg shadow-lg p-8 w-80 max-w-sm relative">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
    
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter your details</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
                type="text"
                placeholder="Table Number"
                value={tableNo}
                onChange={(e) => setTableNo(e.target.value)}
                className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
                onClick={handleSubmit}
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
                Place Order
            </button>
        </div>
    </div>
    

    );
}


export default Customers