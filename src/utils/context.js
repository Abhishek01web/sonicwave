import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setcartSubTotal] = useState(0);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItem.map((item) => (count += item[0].quantity));
        setCartCount(count);

        let subtotal = 0;
        cartItem.map(item => subtotal += item[0].price * item[0].quantity);
        setcartSubTotal(subtotal);
    },[cartItem]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItem];
        let index = items.findIndex(p => p[0].id === product[0].id);
        if (index !== -1) {
            items[index][0].quantity += quantity;
        } else {
            product[0].quantity = quantity;
            items = [...items, product];
        }
        setCartItem(items);
    };

    const handleRemoveToCart = (product) => {
        let items = [...cartItem]
        items = items.filter(p => p[0].id !== product[0].id);
        setCartItem(items);
      }

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItem];
        let index = items.findIndex(p => p[0].id === product[0].id);
        if(type === 'inc') {
            items[index][0].quantity += 1;
        } else if(type === 'dec'){
            if(items[index][0] === 1) return;
            items[index][0].quantity -= 1;
        }
        setCartItem(items)
    }


    return (
        <Context.Provider value={{
            products,
            setProducts,
            categories,
            setCategories,
            cartItem,
            setCartItem,
            cartCount, 
            setCartCount,
            cartSubTotal, 
            setcartSubTotal,
            handleAddToCart,
            handleRemoveToCart,
            handleCartProductQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;