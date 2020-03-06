import React from 'react';
import './product.css';
import {ProductProps} from './type'
import Slider from "../Slider";

const Product = ({product, count, onAdded, onRemove}: ProductProps) => {
    const {images, price, name, description} = product || {};

    const handleAddBtnClick = () => {
        if (onAdded) {
            onAdded(product);
        }
    };

    const handleRemoveBtnClick = () => {
        if (onRemove) {
            onRemove(product);
        }
    };

    return (
        <li className="info product">
            <div className="slider-move">
            </div>
            <ul className="img">
                <Slider imgUrls={images}/>
            </ul>
            <h3 className="padding">{name}</h3>
            <p className="padding">{description}</p>
            <span className="padding price"> Price: ${price}</span>
            {!!onAdded && <button className="padding" onClick={handleAddBtnClick}>ADD</button>}
            {!!onRemove && <button className="padding" onClick={handleRemoveBtnClick}>REMOVE</button>}
            {!!count && <strong className="padding">Count: {count}</strong>}
        </li>
    )
};

export default Product;
