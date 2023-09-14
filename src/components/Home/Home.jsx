import React, { useContext, useEffect } from 'react';

import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import { Categories, Product } from '../../utils/data/api';
import { Context } from "../../utils/context";

import "./Home.scss";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);

    useEffect(() => {
        setCategories(Categories);
        setProducts(Product);
    }, []);


    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products headingText="Popular products" products={products} />
                </div>
            </div>
        </div>
    )
};

export default Home;
