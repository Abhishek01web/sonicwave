import { MdClose } from 'react-icons/md';
// import { LiaOpencart } from 'react-icons/lia';
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import { Context } from '../../utils/context';

import "./Cart.scss";

const Cart = ({ setShowCart }) => {
    const { cartSubTotal } = useContext(Context);

    return <div className='cart-panel'>
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">
                    Shopping Cart
                </span>
                <span className="close-btn" onClick={() => setShowCart(false)}>

                    <MdClose />
                    <span className='text'>close</span>
                </span>
            </div>
            <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className='text'>Subtotal : </span>
                        <span className='text total'>&#8377; : {cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className='checkout-cta'>
                            Checkout
                        </button>
                    </div>
                </div>
            </>

            {/* <div className="empty-cart">
                <LiaOpencart />
                <span>No Products in cart</span>
                <button className='return-btn'>RETURN TO SHOP</button>
            </div> */}

        </div>
    </div>
};

export default Cart;
