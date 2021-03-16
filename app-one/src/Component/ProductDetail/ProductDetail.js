import React from 'react';
import { useParams } from 'react-router';
import fakData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakData.find(pd => pd.key === productKey);
    console.log(product);
    const style = {
            marginTop: "10%"
    }
    return (
        <div style = {style}>
            <h1>Your Product Detail</h1>
            <p><small>Product Code: {productKey}</small></p>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;