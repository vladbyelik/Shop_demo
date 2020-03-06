import React, {useCallback, useState, useMemo} from 'react';
import './App.css';

import {data} from './data';
import ProductList from "./components/ProductList";
import {BasketItemType} from "./interfaces/BasketItemType";
import Basket from "./components/Basket";
import {ProductType} from "./interfaces/ProductType";
import Pagin from './components/Pagination/Pagin'


const App: React.FC = () => {

    const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);

    const productIsInBasket = useCallback((product: ProductType) => {
        return basketItems.some((basketItem: BasketItemType) => basketItem.product.id === product.id);
    }, [basketItems]);

    const onProductAdded = useCallback((product: ProductType) => {
        setBasketItems(currentBasketItems => {
            return productIsInBasket(product) ? currentBasketItems.map((basketItem: BasketItemType) => {
                return basketItem.product.id === product.id ? {...basketItem, count: basketItem.count + 1} : basketItem;
            }) : [...currentBasketItems, {product, count: 1}];
        });
    }, [productIsInBasket]);

    const onProductRemoved = useCallback((product: ProductType) => {
        setBasketItems(currentBasketItems => currentBasketItems
            .reduce((acc: BasketItemType[], basketItem: BasketItemType) => {
                if (basketItem.product.id !== product.id) {
                    return [...acc, basketItem];
                }
                return basketItem.count <= 1 ?
                    acc :
                    [...acc, {...basketItem, count: basketItem.count - 1}];
            }, []));
    }, []);

    const totalPrice = useMemo(() => {
        return basketItems.reduce((acc, basketItem: BasketItemType) => acc + basketItem.product.price * basketItem.count, 0);
    }, [basketItems]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <section className="section">
            <h1 className="headline">SHOP</h1>
            <div className="total">Total: ${totalPrice}</div>
            <div className="shop">
                <div className="product-column">
                    <ProductList products={data} onProductAddRequest={onProductAdded} posts={currentPosts}/>
                    <Pagin postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
                </div>  
                <div className="product-column">
                    <Basket basketItems={basketItems} onProductRemoveRequest={onProductRemoved}/>
                </div>
            </div>
        </section>
    );
};

export default App;