import React, { createContext, useState } from "react";
import { faker } from "@faker-js/faker";
type Props = {
    children: React.ReactNode;
};

type product = {
    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
    isAdded: boolean;
};

type product_and_cart = {
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

type productsType = {
    products: product[] | null;
    setProducts: React.Dispatch<React.SetStateAction<product[] | null>>;
    cart: product_and_cart[] | null;
    setCart: React.Dispatch<React.SetStateAction<product_and_cart[] | null>>;
    addToCart: (product: product) => void;
    removeFromCart: (product: product) => void;
};

export const Context = createContext<productsType | null>(null);

const fakeProducts = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    isAdded: false,
}));

const ProductContext = ({ children }: Props) => {
    const [products, setProducts] = useState<product[] | null>(fakeProducts);
    const [cart, setCart] = useState<product_and_cart[] | null>([]);
    const addToCart = (product: product) => {
        const item = cart?.find((i) => i.id === product.id);
        if (item) {
            setCart(
                cart!.map((i) =>
                    i.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : i
                )
            );
        } else {
            setCart([...cart!, { ...product, quantity: 1 }]);
        }
        product.isAdded = true;
    };

    const removeFromCart = (product: product) => {
        const item = cart?.find((i) => i.id === product.id);
        if (item?.quantity === 1) {
            setCart(cart!.filter((i) => i.id !== product.id));
        } else {
            setCart(
                cart!.map((i) =>
                    i.id === product.id
                        ? { ...item!, quantity: item!.quantity - 1 }
                        : i
                )
            );
        }
        product.isAdded = false;
    };

    return (
        <Context.Provider
            value={{
                cart,
                setCart,
                products,
                setProducts,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ProductContext;
