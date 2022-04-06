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
};

type IProps = {
    product: Props;
    products: Props[] | null;
    setProducts: React.Dispatch<React.SetStateAction<Props[] | null>>;
    cart: Props[] | null;
    setCart: React.Dispatch<React.SetStateAction<Props[] | null>>;
};

const Product: React.FC<IProps> = ({ product, cart, setCart }) => {
    const renderStars = (product: Props) => {
        const stars: any = [];
        for (let i = 0; i < product.ratings; i++) {
            stars.push("⭐");
        }
        return stars;
    };

    const addToCart = (product: Props) => {
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
                    <p className="rating">{renderStars(product)}</p>
                </div>
                <Button onClick={() => addToCart(product)} variant="contained">
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default Product;
