import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
          <Route path="/register"  element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  )
};

export default App;