import React, {useCallback} from 'react';
import {BasketProps} from "./type";
import Product from "../Product";
import {BasketItemType} from "../../interfaces/BasketItemType";

const Basket = ({basketItems = [], onProductRemoveRequest}: BasketProps) => {
    const renderBasketItem = useCallback(({product, count}: BasketItemType) => (
        <Product key={product.id} product={product} count={count} onRemove={onProductRemoveRequest} />
    ), [onProductRemoveRequest]);

    return (
        <ul className="product-column" >
            {basketItems.map(renderBasketItem)}
        </ul>
    );
};

export default Basket;
