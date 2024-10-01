import {React,useContext} from "react"
import {OrderProvider} from "./context/OrderContext"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import {Home,Orders} from "./imports"

function App() {
  return (
    <>
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="*" element="<h1>404 NOT FOUND</h1>"> </Route>
          </Routes>
      </Router>
    </OrderProvider>
    </>
  )
}

export default App
