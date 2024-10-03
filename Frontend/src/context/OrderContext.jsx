import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <OrderContext.Provider value={{ orderItems, setOrderItems }}>
      {children}
    </OrderContext.Provider>
  );
};
