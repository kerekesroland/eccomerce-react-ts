import { Button } from "@mui/material";
import React from "react";
import "./styles.css";
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

type IProps = {
    product: Props;
    products: Props[] | null;
    setProducts: React.Dispatch<React.SetStateAction<Props[] | null>>;
    cart: Props[] | null;
    setCart: React.Dispatch<React.SetStateAction<Props[] | null>>;
    addToCart: (product: Props) => void;
    removeFromCart: (product: Props) => void;
};

const Product: React.FC<IProps> = ({ product, addToCart, removeFromCart }) => {
    const renderStars = (product: Props) => {
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
                            <b>Not</b> In Stock
                        </p>
                    )}

                    <p className="rating">{renderStars(product)}</p>
                </div>

                <Button
                    style={{ position: "relative", top: "3px" }}
                    onClick={() => addToCart(product)}
                    variant="contained"
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default Product;
