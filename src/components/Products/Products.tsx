import { Button } from "@mui/material";
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
                    onClick={() => handleSortFastDelivery()}
                    style={{ marginTop: "5rem", marginLeft: "31rem" }}
                    variant="contained"
                >
                    fast delivery
                </Button>
                <Button
                    onClick={() => handleSortByStock()}
                    style={{ marginTop: "5rem", marginLeft: "5rem" }}
                    variant="contained"
                >
                    In Stock
                </Button>
                <Button
                    onClick={() => handleSortByRating()}
                    style={{ marginTop: "5rem", marginLeft: "5rem" }}
                    variant="contained"
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
