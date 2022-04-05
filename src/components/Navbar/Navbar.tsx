import React from "react";
import { Link } from "react-router-dom";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./index.css";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }: any) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export function CustomizedBadges() {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}

const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/" className="nav-item">
                        <h1>Rolca Shop</h1>
                    </Link>
                </li>
                <li className="nav-item search-bar">
                    <input type="text" placeholder="Search product" />
                </li>
                <li className="nav-item">
                    <Link to="/">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={4} color="error">
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
