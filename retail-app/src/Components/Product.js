import React from "react";
import "./product.css";

const products = [
  { id: 1, name: "Laptop", price: 80000, image: "laptop.jpg" },
  { id: 2, name: "Smartphone", price: 16000, image: "phone.jpg" },
  { id: 3, name: "Smartwatch", price: 5000, image: "smartwatch.jpg" },
  { id: 4, name: "Speaker", price: 3000, image: "speaker.jpg" },
];

function ProductPage() {
  return (
    <div className="product-container">
      <h2>Product Catalogue</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Rs.{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
