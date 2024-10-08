import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Orders, Navbar ,FavoriteItems} from "./imports";
import { OrderProvider } from "./context/OrderContext";
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'; // Import DarkModeProvider
import { FavoriteProvider } from './context/FavoriteContext'; // Import FavoriteProvider

function App() {
  return (
    <DarkModeProvider>
      <OrderProvider>
        <FavoriteProvider> {/* Wrap with FavoriteProvider */}
          <Main />
        </FavoriteProvider>
      </OrderProvider>
    </DarkModeProvider>
  );
}

function Main() {
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <div className={`min-h-screen transition duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Router>
        <Navbar /> {/* Navbar included here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/favorites" element={<FavoriteItems />} /> {/* Add this line */}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
