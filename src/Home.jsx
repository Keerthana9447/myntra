import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="App">
            {/* Header Section */}
            <header className="App-header">
                <h1 className="logo">Zomato Clone</h1>
                <p className="tagline">Discover the best food & drinks in your city</p>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for restaurants, cuisines or dishes..."
                />
            </header>

            {/* Restaurant Cards */}
            <div className="restaurant-section">
                <h2>Popular Restaurants</h2>
                <div className="restaurant-list">
                    <div className="restaurant-card">
                        <img
                            src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Pizza"
                        />
                        <h3>Pizza Palace</h3>
                        <p>Italian, Fast Food</p>
                    </div>

                    <div className="restaurant-card">
                        <img
                            src="https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger-1024x538.png"
                            alt="Burger"
                        />
                        <h3>Burger Hub</h3>
                        <p>American, Fast Food</p>
                    </div>

                    <div className="restaurant-card">
                        <img
                            src="https://thumbs.dreamstime.com/b/close-up-hand-holding-delicious-chicken-shawarma-wrap-fresh-vegetables-sauce-freshly-made-filled-flavorful-353765665.jpg"
                            alt="Shawarma"
                        />
                        <h3>Shawarma Spot</h3>
                        <p>Arabic, Fast Food</p>
                    </div>

                    <div className="restaurant-card">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s"
                            alt="Biryani"
                        />
                        <h3>Biryani House</h3>
                        <p>Indian, Mughlai</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
