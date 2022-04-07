import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
type Props = {
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

type IProps = {
    cartItem: Props;
    product: Props;
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
    product,
    cart,
    setCart,
}) => {
    const removeAllQuantityFromCart = (product: Props) => {
        const newCart = cart?.filter((item: Props) => item.id !== product.id);
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
                        onClick={() => removeAllQuantityFromCart(product)}
                        style={{}}
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
