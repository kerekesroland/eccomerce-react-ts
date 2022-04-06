import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
import CartItem from "../CartItem/CartItem";
import "./styles.css";
type Props = {
    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
    quantity: number;
};

const Cart = () => {
    const { cart }: any = useContext(Context);
    return (
        <div className="cart-items-container">
            {cart?.map((cartItem: Props) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
    );
};

export default Cart;
