import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <h2>About Us</h2>
            <p>
                Welcome to our Demo E‑Commerce application built using <strong>React</strong>.
            </p>
            <p>
                This project is inspired by Flipkart’s design, featuring a modern navbar,
                reusable product cards, and a smooth shopping flow.
            </p>
            <p>
                Our goal is to showcase how React can be used to build scalable,
                component‑based web applications with clean UI and interactive features.
            </p>

            <div className="about-highlights">
                <h3>Highlights:</h3>
                <ul>
                    <li>Flipkart‑style responsive navigation bar</li>
                    <li>Reusable product card components</li>
                    <li>Cart and checkout functionality</li>
                    <li>Styled with modern CSS for a clean look</li>
                </ul>
            </div>

            <footer className="about-footer">
                <p>© 2025 Demo E‑Commerce | Built with React</p>
            </footer>
        </div>
    );
}

export default About;
