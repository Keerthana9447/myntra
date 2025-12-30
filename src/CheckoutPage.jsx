import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage({ cart, setCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const [ordered, setOrdered] = useState(false);
    const navigate = useNavigate();

    const handleOrder = (e) => {
        e.preventDefault();
        setOrdered(true);
        setCart([]); // clear cart
        setTimeout(() => navigate("/"), 3000);
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <p>Total Amount: ₹{total}</p>
            {!ordered ? (
                <form onSubmit={handleOrder}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="text" placeholder="Address" required />
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="Postal Code" required />
                    <input type="text" placeholder="Phone Number" required />
                    <button type="submit">Place Order</button>
                </form>
            ) : (
                <div className="order-message">
                    <h3>Your product is ordered!</h3>
                    <p>Redirecting to home page...</p>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;
