import React, { useEffect, useState } from 'react';
import { LoadingSpinner, Skelleton } from '../../imports';
import { useDarkMode } from '../../context/DarkModeContext'; // Import useDarkMode

function Orders() {
  const [orderItems, setOrderItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useDarkMode(); // Get darkMode state

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner/skeleton after "loading"
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

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
  }, []);

  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}> {/* Apply background and text color */}
      {loading ? (
        <div>
          <LoadingSpinner />  {/* Display spinner while loading */}
          <Skelleton />        {/* Display skeleton screen */}
        </div>
      ) : (
        <div className="content">
          <div className="kitchen-dashboard p-8">
            <h1 className="text-3xl font-semibold mb-6">Order Items</h1>
            {fetchError ? (
              <p className="text-red-600">{fetchError}</p>
            ) : orderItems.length === 0 ? (
              <p className="text-gray-600">No order items available.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className={`min-w-full shadow-md rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}> {/* Change table background color */}
                  <thead>
                    <tr className="bg-pink-400 text-white">
                      <th className="p-4 text-left">Table Number</th>
                      <th className="p-4 text-left">Item ID</th>
                      <th className="p-4 text-left">Item Name</th>
                      <th className="p-4 text-left">Quantity</th>
                      <th className="p-4 text-left">Confirmation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.flatMap((orderGroup, groupIndex) =>
                      orderGroup.map((order, orderIndex) => {
                        return order.Cart.map((item, itemIndex) => (
                          <tr 
                            key={`${groupIndex}-${orderIndex}-${itemIndex}`} 
                            className={`border-b ${itemIndex === 0 ? 'border-t-4 border-gray' : ''} ${darkMode ? 'bg-gray-700' : 'bg-white'}`} // Row background color
                          >
                            {/* Render the Table Number cell only on the first item of each order */}
                            {itemIndex === 0 && (
                              <td
                                className={`p-4 text-center font-bold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} // Cell text color
                                rowSpan={order.Cart.length} // Span the number of items in the Cart
                              >
                                {order.TableNumber}
                              </td>
                            )}
                            <td className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} p-4`}>{item.id}</td>
                            <td className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} p-4`}>{item.name}</td>
                            <td className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} p-4`}>{item.Quantity}</td>
                            {itemIndex === 0 && (
                              <td
                                className={`text-center font-bold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-800'} p-4`} // Cell text color
                                rowSpan={order.Cart.length} // Span the number of items in the Cart
                              >
                                <button className="p-2 bg-green-500">Placed</button>
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
        </div>
      )}
    </div>
  );
}

export default Orders;
