import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import "./App.css";
import Cart from "./components/Cart/Cart";
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
