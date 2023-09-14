import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Products from '../Products/Products';
import { Categories, Product } from '../../utils/data/api';
import { Context } from '../../utils/context';

import "./Category.scss";

const Category = () => {
    const { id } = useParams();

    const { products, setProducts, categories, setCategories } = useContext(Context);

    useEffect(() => {
        setCategories(Categories);
        setProducts(Product);
    }, []);

    if(!products && !categories) return;
    const pid = parseInt(id);

    const filterCat = categories?.filter((curEle) => {
        return parseInt(curEle.id) === pid;
    });


    // if(pid >= 5) {
    //     pid === 4
    // }

    const fillterProd = products?.filter((curEle) => {
        return curEle.category === filterCat[0].title;
    });
    console.log(fillterProd);
    console.log(filterCat);

    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {filterCat[0].title}
            </div>
            <Products innerPage={true} products={fillterProd} />
        </div>
    </div>;
};

export default Category;
