import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Products from "./pages/Product";
import WishList from "./pages/Whishlist";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/whishlist" element={<WishList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
