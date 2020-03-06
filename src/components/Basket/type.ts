import {BasketItemType} from "../../interfaces/BasketItemType";
import {ProductType} from "../../interfaces/ProductType";

export interface BasketProps {
    basketItems: BasketItemType[];
    onProductRemoveRequest: (product: ProductType) => void;
}
