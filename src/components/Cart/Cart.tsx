import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
import CartItem from "../CartItem/CartItem";
import "./styles.css";

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

    return (
        <div className="cart-items-container">
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
    );
};

export default Cart;
