import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name,category,img,seller,price,stock,key} = props.product;
    // console.log(props.product.name)
    
    return (
        <div>
            <div className="Card-container">
                <div className="single-product">
                    <div className="imgBox">
                        <img src = {img}></img>
                    </div>
                    <div className="content">
                        <h4>Product Name: <Link to={"/product/"+key}>{name}</Link></h4>
                        <p>Product id: {key}</p>
                        <p>Category: {category}</p>
                        <p>Seller: {seller}</p>
                        <p>Price: {price}$</p>
                        {
                            props.showAddToCart &&
                            <button onClick = {()=>props.handleProduct(props.product)}>
                                Add to cart
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;