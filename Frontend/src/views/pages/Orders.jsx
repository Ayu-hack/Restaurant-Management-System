import React, { useEffect, useState } from 'react';

function Orders() {
  const [orderItems, setOrderItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/getorder')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched order items:', data.orders);
        setOrderItems(data.orders);
      })
      .catch(error => {
        console.error('Error fetching order items:', error);
        setFetchError('Failed to fetch order items.');
      });
  }, [orderItems]);

  return (
    <div className="kitchen-dashboard p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Order Items</h1>
      {fetchError ? (
        <p className="text-red-600">{fetchError}</p>
      ) : orderItems.length === 0 ? (
        <p className="text-gray-600">No order items available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-pink-400 text-white">
                <th className="p-4 text-left">Table Number</th>
                <th className="p-4 text-left">Item ID</th>
                <th className="p-4 text-left">Item Name</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Confimation</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.flatMap((orderGroup, groupIndex) =>
                orderGroup.map((order, orderIndex) => {
                  return order.Cart.map((item, itemIndex) => (
                    <tr 
                      key={`${groupIndex}-${orderIndex}-${itemIndex}`} 
                      className={`border-b ${itemIndex === 0 ? 'border-t-4 border-gray' : ''}`}
                    >
                      {/* Render the Table Number cell only on the first item of each order */}
                      {itemIndex === 0 && (
                        <td
                          className="p-4 text-gray-800 text-center font-bold text-lg"
                          rowSpan={order.Cart.length} // Span the number of items in the Cart
                        >
                          {order.TableNumber}
                        </td>
                      )}
                      <td className="p-4 text-gray-800">{item.id}</td>
                      <td className="p-4 text-gray-800">{item.name}</td>
                      <td className="p-4 text-gray-800">{item.Quantity}</td>
                      {itemIndex === 0 && (
                        <td
                          className="p-4 text-gray-800 text-center font-bold text-lg"
                          rowSpan={order.Cart.length} // Span the number of items in the Cart
                        >
                         <button className="p-2 bg-green"> Placed </button>
                        </td>
                      )}
                    </tr>
                  ));
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
