/* eslint-disable no-useless-escape */
import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "Rs.80000", image: "laptop.jpg" },
  { id: 2, name: "Smartphone", price: "Rs.16000", image: "phone.jpg" },
  { id: 3, name: "Smartwatch", price: "Rs.5000", image: "smartwatch.jpg" },
  { id: 4, name: "Speaker", price: "Rs.3000", image: "speaker.jpg" },
];

function Products({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Product Catalogue</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
                Logout
            </button>
        </div>
    );
}

export default Products;
