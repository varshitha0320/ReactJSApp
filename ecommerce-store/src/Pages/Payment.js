import React from "react";
import { useNavigate } from "react-router-dom";

function Payment({ setCart }) {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful!");
    setCart([]); // Clear cart after payment
    navigate("/products");
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
