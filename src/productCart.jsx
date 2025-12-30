import React from "react";
import "./productCart.css";

function ProductCart({ image, title, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>₹{price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCart;
