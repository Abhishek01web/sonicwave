import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { Product } from '../../utils/data/api';
import { Context } from '../../utils/context';

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa';

import "./SingleProduct.scss";

const SingleProduct = () => {
    const { id } = useParams();
    const { products, setProducts, handleAddToCart } = useContext(Context);
    const [qnt, setQnt] = useState(1);

    const increment = () => {
       setQnt(qnt+1);
    }

    const decrement = () => {
        setQnt((prevstate) => {
            if(prevstate === 1) return 1;
            return prevstate - 1;
        })
    }

    useEffect(() => {
        setProducts(Product);
    },);

    if (!products) return;

    const fillterProd = products?.filter((curEle) => {
        return parseInt(curEle.id) === parseInt(id);
    });

    // console.log(fillterProd[0].name);

    const { name, img, category, price, decs } = fillterProd[0];

    return <div className='single-product-main-content'>
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={img} alt={img} />
                </div>
                <div className="right">
                    <span className="name">{name}</span>
                    <span className="price">&#8377; {price}</span>
                    <span className="desc">{decs}</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{qnt}</span>
                            <span onClick={increment} >+</span>
                        </div>
                        <button className='add-to-cart-button' onClick={() => {
                            handleAddToCart(fillterProd, qnt)
                            setQnt(1)
                        }}>
                            <FaCartPlus />
                            ADD TO CART
                        </button>
                    </div>

                    <span className='divider' />

                    <div className="info-item">
                        <span className="text-blod">Category :{' '}
                            <span>{category}</span>
                        </span>
                        <span className="text-blod">Share:
                            <span className='social-icons'>
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                                <FaPinterest size={16} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts productid={id}/>
        </div>
    </div>;
};

export default SingleProduct;

