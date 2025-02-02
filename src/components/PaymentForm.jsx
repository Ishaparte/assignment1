import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/paymentform.css";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    
    const isPaymentSuccessful = Math.random() > 0.3; 

    if (isPaymentSuccessful) {
      navigate("/payment-success");
    } else {
      navigate("/payment-failure");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div className="input-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="card-details">
          <div className="input-group">
            <label>Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>CVV</label>
            <input
              type="password"
              placeholder="***"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="pay-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
