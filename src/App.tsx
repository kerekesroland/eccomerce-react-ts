import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ProductContext from "./context/ProductContext";
const App = () => {
    return (
        <Router>
            <ProductContext>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </ProductContext>
        </Router>
    );
};

export default App;
