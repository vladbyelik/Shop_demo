import React, {useCallback} from 'react';
import {ProductListProps} from "./type";
import Product from "../Product";
import {ProductType} from "../../interfaces/ProductType";

const ProductList = ({products = [], onProductAddRequest, posts}: ProductListProps) => {

    const renderProductItem = useCallback((product: ProductType) => (
        <Product key={product.id} product={product} onAdded={onProductAddRequest}/>
    ), [onProductAddRequest]);

    return (
        <ul className="product-column" id="myUl">
            {posts.map(post => (
                <li key={post.id} className='li-pgn'>
                    {renderProductItem(post)}
                </li>
            ))}
        </ul>
    );
};

export default ProductList;