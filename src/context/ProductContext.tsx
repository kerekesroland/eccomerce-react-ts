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
};

type productsType = {
    products: product[] | null;
    setProducts: React.Dispatch<React.SetStateAction<product[] | null>>;
    cart: product[] | null;
    setCart: React.Dispatch<React.SetStateAction<product[] | null>>;
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
}));

const ProductContext = ({ children }: Props) => {
    const [products, setProducts] = useState<product[] | null>(fakeProducts);
    const [cart, setCart] = useState<product[] | null>([]);

    return (
        <Context.Provider value={{ cart, setCart, products, setProducts }}>
            {children}
        </Context.Provider>
    );
};

export default ProductContext;
