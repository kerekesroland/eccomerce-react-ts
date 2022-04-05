import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
type Props = {
    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
};

type IProps = {
    product: Props;
    products: Props[] | null;
    setProducts: React.Dispatch<React.SetStateAction<Props[] | null>>;
    cart: Props[] | null;
    setCart: React.Dispatch<React.SetStateAction<Props[] | null>>;
};

const Cart = () => {
    const { product, products, setProducts, cart, setCart }: any =
        useContext(Context);
    return (
        <div>
            {cart?.map((cartItem: Props) => (
                <div key={cartItem.id}>{cartItem.name}</div>
            ))}
        </div>
    );
};

export default Cart;
