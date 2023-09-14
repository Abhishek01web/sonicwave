import { MdClose } from "react-icons/md";

import { useContext } from "react";
import { Context } from "../../../utils/context";

import "./CartItem.scss";

const CartItem = () => {

    const { cartItem, handleRemoveToCart, handleCartProductQuantity } = useContext(Context);

    return <div className="cart-products">
        {
            cartItem?.map((item) => {
                const {id, img, name, price, quantity} = item[0];
                return (
                    <div className="cart-product" key={id}>
                        <div className="img-container">
                            <img src={img} alt={img} />
                        </div>
                        <div className="prod-details">
                            <span className="name">{name}</span>
                            <MdClose className="close-btn" onClick={() => {
                                handleRemoveToCart(item)
                            }} />
                            <div className="quantity-buttons">
                                <span onClick={() => handleCartProductQuantity('dec', item)} >-</span>
                                <span>{quantity}</span>
                                <span onClick={() => handleCartProductQuantity('inc', item)} >+</span>
                            </div>
                            <div className="text">
                                <span>{quantity}</span>
                                <span>x</span>
                                <span className="highlight">&#8377; {price * quantity}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
};

export default CartItem;
