import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
import CartItem from "../CartItem/CartItem";
import "./styles.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
    const {
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
    }: any = useContext(Context);

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

    type cartItemProp = {
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
        cartItem: cartItemProp;
        product: Props;
        products: Props[] | null;
        setProducts: React.Dispatch<React.SetStateAction<Props[] | null>>;
        cart: Props[] | null;
        setCart: React.Dispatch<React.SetStateAction<Props[] | null>>;
        addToCart: (product: Props) => void;
        removeFromCart: (product: Props) => void;
    };

    const priceOfItemsInCart = cart.reduce(
        (acc: number, item: Props) => acc + Number(item.price) * item.quantity,
        0
    );

    if (cart) {
        console.log(priceOfItemsInCart);
    }
    const taxes = priceOfItemsInCart * 0.27;
    const shipping = priceOfItemsInCart > 5000 ? 0 : 100;
    const total = priceOfItemsInCart + taxes + shipping;

    return (
        <>
            {cart.length ? (
                <>
                    <div className="cart-items-container">
                        <h1 className="cart-title">Cart</h1>
                        {cart?.map((cartItem: IProps["cartItem"]) => (
                            <CartItem
                                product={cartItem}
                                key={cartItem.id}
                                cartItem={cartItem}
                                products={products}
                                setProducts={setProducts}
                                cart={cart}
                                setCart={setCart}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </div>
                    <div className="cart-total-container">
                        <div className="prices-container">
                            <div className="subtotal-container">
                                <span className="subtotal">Subtotal </span>
                                <span className="subtotal-price">
                                    ${priceOfItemsInCart}
                                </span>
                            </div>
                            <div className="tax-container">
                                <span className="tax">Tax</span>
                                <span className="tax-price">
                                    ${taxes.toFixed(2)}
                                </span>
                            </div>
                            <div className="delivery-container">
                                <span className="delivery">Delivery</span>
                                <span className="delivery-price">
                                    ${shipping}
                                </span>
                            </div>
                            <div className="total-container">
                                <span className="total">Total</span>
                                <span className="total-price">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <Link to="/checkout">
                            <Button
                                style={{
                                    padding: "10px",
                                    width: "90%",
                                    borderRadius: "10px",
                                    position: "absolute",
                                    bottom: "6rem",
                                    left: "1.3rem",
                                }}
                                variant="contained"
                            >
                                Proceed to Checkout
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button
                                style={{
                                    padding: "10px",
                                    width: "90%",
                                    borderRadius: "10px",
                                    position: "absolute",
                                    bottom: "2rem",
                                    color: "#282D31",
                                    borderColor: "#ccc",
                                    left: "1.3rem",
                                }}
                                variant="outlined"
                            >
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </>
            ) : (
                <h1 className="empty-cart">
                    Cart is empty, try adding some items...
                </h1>
            )}
        </>
    );
};

export default Cart;
