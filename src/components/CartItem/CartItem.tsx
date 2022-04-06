import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
type Props = {
    cartItem: {
        id: string;
        name: string;
        price: string;
        image: string;
        inStock: number;
        fastDelivery: boolean;
        ratings: number;
        quantity: number;
        isAdded: boolean;
    };
};

type IProps = {
    cartItem: Props["cartItem"];
    product: Props["cartItem"];
    products: Props[] | null;
    setProducts: React.Dispatch<React.SetStateAction<Props[] | null>>;
    cart: Props[] | null;
    setCart: React.Dispatch<React.SetStateAction<Props[] | null>>;
    addToCart: (product: Props) => void;
    removeFromCart: (product: Props) => void;
};

const CartItem: React.FC<IProps> = ({
    cartItem,
    addToCart,
    removeFromCart,
}) => {
    return (
        <>
            <div className="container">
                <img
                    className="cart-item-image"
                    src={cartItem.image}
                    alt={cartItem.name}
                />
                <div className="cart-item-container">
                    <div className="title">{cartItem.name}</div>
                    <div className="details-container">
                        <span className="price">${cartItem.price} | </span>
                        {cartItem.inStock > 0 ? (
                            <span className="in-stock">In Stock</span>
                        ) : (
                            <span className="out-of-stock">Out of Stock</span>
                        )}
                    </div>
                </div>
                <div className="buttons">
                    <Button color="primary" variant="contained">
                        +
                    </Button>
                    <strong
                        style={{
                            fontSize: "1.5rem",
                            color: "#282D31",
                            fontFamily: "Poppins, sans-serif",
                            position: "relative",
                            top: "5px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                        }}
                    >
                        {cartItem.quantity}
                    </strong>
                    <Button color="primary" variant="contained">
                        -
                    </Button>
                    <Button
                        style={{
                            marginLeft: "25px",
                        }}
                        color="error"
                        variant="contained"
                    >
                        Remove from Cart
                    </Button>
                </div>
            </div>
        </>
    );
};

export default CartItem;
