import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
import Product from "../Product/Product";
const Products = () => {
    const {
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
    }: any = useContext(Context);
    type product = {
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

    return (
        <div className="grid-container">
            {products.map((product: product) => (
                <Product
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
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
