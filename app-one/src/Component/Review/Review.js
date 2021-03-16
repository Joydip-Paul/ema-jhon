import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const[cart,setCart] = useState([]);
    const handleRemoveProduct = (productKey)=>{
        console.log("remove");
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key=>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        console.log(cartProduct);
        setCart(cartProduct);
    },[])
    return (
        <div className="review-container">
            <div className = "reviewLeft">
                {/* <h5>Cart Items:{cart.length}</h5> */}
                {
                    cart.map(pd => <ReviewItem
                        key = {pd.key}
                        handleRemoveProduct = {handleRemoveProduct}
                    product={pd}></ReviewItem>)
                }
            </div>

            <div className = "reviewRight">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Review;