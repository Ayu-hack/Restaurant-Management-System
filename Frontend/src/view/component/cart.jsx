import React from 'react'

const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price*item.Quantity, 0);

    return (
<div className="cart bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Cart</h2>

    {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
    ) : (
        <div>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="text-left text-gray-600 font-medium border-b">
                        <th className="py-2">Item Name</th>
                        <th className="py-2">Quantity</th>
                        <th className="py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2">{item.name}</td>
                            <td className="py-2">{ item.Quantity}x</td>
                            <td className="py-2">₹{item.price*item.Quantity}</td>
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


export default Cart
