import { productType } from "./productType";
import { product_and_cartType } from "./product_and_cartType";

export interface productsType {
    products: productType[] | null;
    setProducts: React.Dispatch<React.SetStateAction<productType[] | null>>;
    cart: product_and_cartType[] | null;
    setCart: React.Dispatch<
        React.SetStateAction<product_and_cartType[] | null>
    >;
    addToCart: (product: productType) => void;
    removeFromCart: (product: productType) => void;
    filterer: productType[] | null;
    setFilterer: React.Dispatch<React.SetStateAction<productType[] | null>>;
}
