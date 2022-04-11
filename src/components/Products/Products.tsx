import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context/ProductContext";
import Product from "../Product/Product";
import { product_and_cartType } from "../../interfaces/product_and_cartType";
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

    const handleSortByStock = () => {
        setFilterer(products.filter((m: any) => m.inStock > 0));
    };

    const handleSortFastDelivery = () => {
        setFilterer(products.filter((m: any) => m.fastDelivery));
    };

    // const handleSortByRating = () => {
    //     setFilterer(products.filter((m: any) => m.ratings > 3));
    // };

    const handleSortAll = () => {
        setFilterer(products);
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
                    onClick={() => handleSortAll()}
                >
                    All products
                </Button>
                <Button
                    variant="contained"
                    className="sort-btn"
                    onClick={() => handleSortByStock()}
                >
                    In Stock
                </Button>
            </div>
            <div className="grid-container">
                {filterer.map((product: product_and_cartType) => (
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
