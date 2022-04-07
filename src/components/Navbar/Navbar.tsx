import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/ProductContext";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./index.css";

const Navbar = () => {
    const { cart, products, setFilterer }: any = useContext(Context);

    const handleSortBySearch = (e: any) => {
        setFilterer(
            products.filter((m: any) =>
                m.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/" className="nav-item">
                        <h1 className="nav-title">Rolca Shop</h1>
                    </Link>
                </li>
                <li className="nav-item search-bar">
                    <input
                        type="text"
                        placeholder="Search product"
                        onChange={(e: any) => handleSortBySearch(e)}
                    />
                </li>
                <li className="nav-item">
                    <Link to="/cart">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={cart.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
