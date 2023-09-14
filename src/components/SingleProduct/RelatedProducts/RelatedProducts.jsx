import { useContext, useEffect } from 'react';
import { Product } from '../../../utils/data/api';
import { Context } from '../../../utils/context';
import Products from '../../Products/Products';

const RelatedProducts = ({productid}) => {
    const { products, setProducts } = useContext(Context);
    // console.log(products);

    useEffect(() => {
        setProducts(Product);
    },);

    if (!products) return;

    const fillterProd = products.filter((curEle) => {
         return parseInt(curEle.id) === parseInt(productid);
    });

    const relatedProd = products?.filter((curEle) => {
        return curEle.category === fillterProd[0].category&parseInt(curEle.id) !== parseInt(productid);
    });

    return <div className='related-products'>
        <Products headingText="Related Products" products={relatedProd}  />
    </div>;
};

export default RelatedProducts;
