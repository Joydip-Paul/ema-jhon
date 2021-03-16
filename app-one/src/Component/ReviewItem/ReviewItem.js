import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const{name,quantity,key} = props.product;
    const style1 = {
        backgroundColor: "#eee",
        margin: "10px"
    }
    const style2 = {
        backgroundColor: "#fff",
        margin: "10px",
        padding: "10px",
        boxShadow: "#0000001f 0px 1px 3px, #0000003d 0px 1px 2px"
    }
    const style3 = {
        backgroundColor: "red",
        color: "#fff",
        outline: "none",
        border: "none",
        padding: "10px 20px"
    }
    return (
        <div className="product-review" style = {style1}>
            <div style = {style2}>
                <h4>Product Name: {name}</h4>
                <p>Quantity: {quantity}</p>

                <button onClick = {()=>props.handleRemoveProduct(key)}
                    style={style3}>
                    Remove Item
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;