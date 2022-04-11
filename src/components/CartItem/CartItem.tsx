import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import { product_and_cartType } from "../../interfaces/product_and_cartType";

type Props = {
    cartItem: product_and_cartType;
    product: product_and_cartType;
    products: product_and_cartType[] | null;
    setProducts: React.Dispatch<
        React.SetStateAction<product_and_cartType[] | null>
    >;
    cart: product_and_cartType[] | null;
    setCart: React.Dispatch<
        React.SetStateAction<product_and_cartType[] | null>
    >;
    addToCart: (product: product_and_cartType) => void;
    removeFromCart: (product: product_and_cartType) => void;
};

const CartItem: React.FC<Props> = ({
    cartItem,
    addToCart,
    removeFromCart,
    product,
    cart,
    setCart,
}) => {
    const removeAllQuantityFromCart = (product: product_and_cartType) => {
        const newCart = cart?.filter(
            (item: product_and_cartType) => item.id !== product.id
        );
        setCart(newCart!);
    };
    return (
        <>
            <div className="container">
                <img
                    className="cart-item-image"
                    src={cartItem.image}
                    alt={cartItem.name}
                />
                <div className="cart-item-container">
                    <div className="cart-item-title">{cartItem.name}</div>
                    <div className="details-container">
                        <span className="price">${cartItem.price} | </span>
                        {cartItem.inStock > 0 ? (
                            <span className="cart-in-stock">In Stock</span>
                        ) : (
                            <span className="cart-out-of-stock">
                                Out of Stock
                            </span>
                        )}
                    </div>
                </div>
                <div className="buttons">
                    <Button
                        onClick={() => removeFromCart(product)}
                        color="primary"
                        variant="contained"
                    >
                        -
                    </Button>

                    <strong
                        style={{
                            fontSize: "1.5rem",
                            color: "#282D31",
                            fontFamily: "Poppins, sans-serif",
                            position: "relative",
                            top: "5px",
                            paddingLeft: "2%",
                            paddingRight: "2%",
                        }}
                    >
                        {cartItem.quantity}
                    </strong>
                    <Button
                        onClick={() => addToCart(product)}
                        color="primary"
                        variant="contained"
                        style={{ marginRight: "2%" }}
                    >
                        +
                    </Button>

                    <Button
                        className="btn-remove-all"
                        onClick={() => removeAllQuantityFromCart(product)}
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
