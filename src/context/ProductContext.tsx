import React, { createContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { productType } from "../interfaces/productType";
import { product_and_cartType } from "../interfaces/product_and_cartType";
import { productsType } from "../interfaces/productsType";

type Props = {
    children: React.ReactNode;
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
    const [products, setProducts] = useState<productType[] | null>(
        fakeProducts
    );
    const [cart, setCart] = useState<product_and_cartType[] | null>([]);
    const [filterer, setFilterer] = useState<productType[] | null>(products);

    const addToCart = (product: productType) => {
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

    const removeFromCart = (product: productType) => {
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
                filterer,
                setFilterer,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ProductContext;
