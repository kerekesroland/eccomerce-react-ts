import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../context/ProductContext";
import Product from "../Product/Product";
import "./styles.css";
const Products = () => {
    const {
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        filterer,
        setFilterer,
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

    const handleSortByStock = () => {
        setFilterer(products.filter((m: any) => m.inStock > 0));
    };

    const handleSortFastDelivery = () => {
        setFilterer(products.filter((m: any) => m.fastDelivery));
    };

    const handleSortByRating = () => {
        setFilterer(products.filter((m: any) => m.ratings > 3));
    };

    return (
        <>
            <div className="products-btn-container">
                <Button
                    className="sort-btn"
                    variant="contained"
                    onClick={() => handleSortFastDelivery()}
                >
                    fast delivery
                </Button>
                <Button
                    variant="contained"
                    className="sort-btn"
                    onClick={() => handleSortByStock()}
                >
                    In Stock
                </Button>
                <Button
                    variant="contained"
                    className="sort-btn"
                    onClick={() => handleSortByRating()}
                >
                    High ratings
                </Button>
            </div>
            <div className="grid-container">
                {filterer.map((product: product) => (
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
        </>
    );
};

export default Products;
