import { Button } from "@mui/material";
import React from "react";
import "./styles.css";
import { product_and_cartType } from "../../interfaces/product_and_cartType";

type Props = {
    product: product_and_cartType;
    products: product_and_cartType[] | null;
    setProducts: React.Dispatch<
        React.SetStateAction<product_and_cartType[] | null>
    >;
    cart: product_and_cartType[] | null;
    setCart: React.Dispatch<
        React.SetStateAction<product_and_cartType[] | null>
    >;
    addToCart: (product: product_and_cartType) => void;
    removeFromCart: (product: product_and_cartType) => void;
};

const Product: React.FC<Props> = ({ product, addToCart }) => {
    const renderStars = (product: product_and_cartType) => {
        const stars: any = [];
        for (let i = 0; i < product.ratings; i++) {
            stars.push("⭐");
        }
        return stars;
    };

    return (
        <div className="grid-container">
            <div className="card">
                <div className="card-image-container">
                    <img
                        className="card-image"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div className="card-content">
                    <p className="title">{product.name}</p>
                    <p className="subtitle">
                        {parseInt(product.price).toFixed(0)} $
                    </p>

                    {product.fastDelivery ? (
                        <p className="fast-delivery">Fast delivery </p>
                    ) : (
                        <p className="fast-delivery">
                            <b>No</b> Fast delivery
                        </p>
                    )}
                    {product.inStock ? (
                        <p className="product-in-stock">In Stock </p>
                    ) : (
                        <p className="product-out-of-stock">
                            <b>Out</b> of Stock
                        </p>
                    )}

                    <p className="rating">{renderStars(product)}</p>
                </div>
                {product.inStock ? (
                    <Button
                        style={{ position: "relative", top: "3px" }}
                        onClick={() => addToCart(product)}
                        variant="contained"
                    >
                        Add to cart
                    </Button>
                ) : (
                    <Button
                        style={{
                            position: "relative",
                            top: "3px",
                            color: "white",
                            backgroundColor: "#1976D2",
                            opacity: 0.45,
                        }}
                        onClick={() => addToCart(product)}
                        variant="contained"
                        disabled
                    >
                        Add to cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Product;
