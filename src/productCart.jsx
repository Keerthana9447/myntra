import React from "react";
import "./productCart.css";

function ProductCart({ image, title, price, addToCart }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>₹{price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCart;
