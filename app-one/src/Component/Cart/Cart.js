import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;


    let total = 0;
    for(let i=0;i<cart.length;i++){
        let product = cart[i];
        total = Math.floor(total+product.price*(product.quantity));
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 2.99;
    } else if (total > 0) {
        shipping = 5.99;
    }
    const tax = (total / 10);
    const grandTotal = (total + shipping + tax);

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return precision;
    }

    return (
        <div>
            <h3>My Shopping Cart </h3>
            {/* <p>Item Ordered: {cart.length}</p>
            <p>Total: {total}</p> */}
            <p>items ordered: {cart.length}</p>
            <p>items Price: ${formatNumber(total)}</p>
            <p>shipping cost: ${shipping}</p>
            <p>estimated tax: ${formatNumber(tax)}</p>
            <h4>grand total: <span>${formatNumber(grandTotal)}</span></h4>
            <Link to="./order">
                <button className="checkout">Checkout</button>
            </Link>
            
        </div>
    );
};

export default Cart;