import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage({ cart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.title} />
                                <span>{item.title}</span> - ₹{item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ₹{total}</h3>
                    <Link to="/checkout">
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default CartPage;
