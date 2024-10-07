import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Orders,Navbar } from "./imports";
import { OrderProvider } from "./context/OrderContext";


function App() {
  return (
    <>
      <OrderProvider>
        <Router>
          <Navbar /> {/* Navbar included here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </OrderProvider>
    </>
  );
}

export default App;
