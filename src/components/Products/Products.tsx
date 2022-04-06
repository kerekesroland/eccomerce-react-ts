import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
import Product from "../Product/Product";
const Products = () => {
    const { products, setProducts, cart, setCart }: any = useContext(Context);
    type product = {
        id: string;
        name: string;
        price: string;
        image: string;
        inStock: number;
        fastDelivery: boolean;
        ratings: number;
        quantity: number;
    };

    return (
        <div className="grid-container">
            {products.map((product: product) => (
                <Product
                    key={product.id}
                    products={products}
                    product={product}
                    setProducts={setProducts}
                    cart={cart}
                    setCart={setCart}
                />
            ))}
        </div>
    );
};

export default Products;
