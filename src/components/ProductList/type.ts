import {ProductType} from "../../interfaces/ProductType";

export interface ProductListProps {
    products: ProductType[];
    posts: any[];
    onProductAddRequest: (product: ProductType) => void;
}