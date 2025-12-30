import React from "react";
import "./App.css";
import ProductCart from "./productCart";

function App() {
  const products = [
    {
      image: "https://images.jdmagicbox.com/quickquotes/images_main/casual-t-shirts-for-mens-386198750-oeseg.jpeg",
      title: "Casual Cotton T-Shirt",
      price: 499,
      category: "Men",
    },
    {
      image: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc02b0717cddd4898b4fcde568b7c7398H.jpg_480x480.jpg",
      title: "Running Shoes",
      price: 1999,
      category: "Men",
    },
    {
      image: "https://kasya.in/cdn/shop/files/1_0d14d4ac-eab0-419f-a67a-c6dcde2fa93e.jpg?v=1753168008",
      title: "Summer Floral Dress",
      price: 1299,
      category: "Women",
    },
    {
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736527960-untitled-3-67815035563fa.jpg?crop=0.774xw:0.830xh;0.111xw,0.0871xh&resize=980:*",
      title: "Denim Jeans",
      price: 1599,
      category: "Women",
    },
    {
      image: "https://m.media-amazon.com/images/I/61+wwNBP7aL.jpg",
      title: "Smart Watch",
      price: 2499,
      category: "Women",
    },
    {
      image: "https://bananaclub.co.in/cdn/shop/files/AshGreyFormalTrouser_3.jpg?v=1738819435",
      title: "Formal Pant",
      price: 1499,
      category: "Men",
    },
    {
      image: "https://rukminim2.flixcart.com/image/368/490/xif0q/top/c/f/b/s-emz02111-emeros-original-imah3h9uzbw4v8wh.jpeg?q=90&crop=false",
      title: "Crop top",
      price: 2499,
      category: "Women",
    },
    {
      image: "https://www.blackdenim.in/cdn/shop/files/0A0A6015_1.jpg?v=1726837920&width=1445",
      title: "Formal Shirt",
      price: 1999,
      category: "Men",
    },
    {
      image: "https://www.foreverkidz.in/cdn/shop/files/15.1.jpg?crop=center&height=2100&v=1746014654&width=1500",
      title: "Kids Frock",
      price: 1599,
      category: "Kids",
    },
    {
      image: "https://kidscuddles.com/cdn/shop/files/WhatsApp_Image_2025-10-14_at_2.36.32_AM.jpg?v=1760436657",
      title: "Kids Dress",
      price: 1799,
      category: "Kids",
    },
    {
      image: "https://www.evolvebeauty.com/cdn/shop/files/light_as_air_image_1.jpg?v=1743518743&width=1500",
      title: "Beauty Products",
      price: 2799,
      category: "Beauty",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/c/7/c7343718903380005370_1.jpg?tr=w-500",
      title: "Compact",
      price: 899,
      category: "Beauty",
    },
    {
      image: "https://lagirlindia.com/cdn/shop/files/GLG940-949_prod_img_main_1_1024x1024_75d3ef06-55e7-4021-ba02-5aa259f075c1.webp?v=1754899859&width=2048",
      title: "Lip gloss",
      price: 799,
      category: "Beauty",
    },
    {
      image: "https://marscosmetics.in/cdn/shop/products/fabulash-mascara-607.jpg?v=1638452787",
      title: "Mascara",
      price: 699,
      category: "Beauty",
    },
    {
      image: "https://www.yuvaflowers.com/cdn/shop/files/tied-ribbons-resin-romantic-boat-couple-showpiece-statue-for-home-decor-living-room-bedroom-decoration-items-gift-to-wife-husband-boyfriend-girlfriend-multi-colour-visit-the-tied-ribb.jpg?v=1711902330",
      title: "Home Decors",
      price: 1699,
      category: "Home & Living",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/2690/0106/files/Macrame_Wall_Hangings_for_Vibrant_Home_Decor_480x480.jpg?v=1707463768",
      title: "Decors",
      price: 1299,
      category: "Home & Living",
    },
    {
      image: "https://buildingandinteriors.com/wp-content/uploads/2022/05/2022-05-13-38_1.webp",
      title: "Decor item",
      price: 2299,
      category: "Home & Living",
    },
    {
      image: "https://i.ytimg.com/vi/ScIUtfZC3sc/maxresdefault.jpg",
      title: "Decoration item",
      price: 2549,
      category: "Home & Living",
    },
    {
      image: "https://www.foreverkidz.in/cdn/shop/files/WhatsAppImage2025-06-30at3.14.16PM.jpg?crop=center&height=1194&v=1751285221&width=853",
      title: "Kids Dress",
      price: 1799,
      category: "Kids",
    },
    {
      image: "https://i5.walmartimages.com/asr/3cbfbd20-6c85-43e6-baa5-63208ce2c083.ab8b48c63ff0266df7b716f9f92caa68.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      title: "Kids Dress",
      price: 1899,
      category: "Kids",
    },
  ];

  const categories = ["Men", "Women", "Kids", "Home & Living", "Beauty"];

  return (
    <div className="App">
      <header className="navbar">
        <h1 className="logo">Myntra Clone</h1>
        <nav>
          <ul>
            {categories.map((cat, index) => (
              <li key={index}>
                <a href={`#${cat.replace(/\s+/g, "")}`}>{cat}</a>
              </li>
            ))}
          </ul>
        </nav>
        <input type="text" placeholder="Search for products..." className="search-bar" />
      </header>

      {/* Products grouped by category */}
      <section className="products">
        {categories.map((cat, index) => (
          <div key={index} id={cat.replace(/\s+/g, "")}>
            <h2>{cat}</h2>
            <div className="product-grid">
              {products.filter(p => p.category === cat).map((item, idx) => (
                <ProductCart key={idx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>© 2025 Myntra Clone | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
