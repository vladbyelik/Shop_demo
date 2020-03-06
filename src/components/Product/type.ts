import {ProductType} from "../../interfaces/ProductType";

export interface ProductProps {
    product: ProductType;
    count?: number;
    onAdded?: (product: ProductType) => void;
    onRemove?: (product: ProductType) => void;
}
