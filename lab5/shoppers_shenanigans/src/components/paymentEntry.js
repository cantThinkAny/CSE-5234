import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentEntry = () => {
  const location = useLocation();
  const order = location.state?.order;
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState({
    credit_card_number: "",
    expiration_date: "",
    cvvCode: "",
    card_holder_name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can validate and save paymentInfo
    navigate("/purchase/shippingEntry", { state: { order, paymentInfo } });
  };

  return (
    <div>
      <h1>Payment Information</h1>
      {order ? (
        <div>
          {/* Display order details here */}
          <h2>Order Details</h2>
          <p>Product 1: {order.buyQuantity[0]}</p>
          <p>Product 2: {order.buyQuantity[1]}</p>

          <form onSubmit={handleSubmit}>
            {/* Payment input fields */}
            <label>Credit Card Number</label>
            <br/>
            <input
              type="text"
              name="credit_card_number"
              required
              value={paymentInfo.credit_card_number}
              onChange={handleChange}
            />
            <br />
            <label>Expiration Date</label>
            <br/>
            <input
              type="text"
              name="expiration_date"
              required
              value={paymentInfo.expiration_date}
              onChange={handleChange}
            />
            <br />
            <label>CVV Code</label>
            <br/>
            <input
              type="text"
              name="cvvCode"
              required
              value={paymentInfo.cvvCode}
              onChange={handleChange}
            />
            <br />
            <label>Card Holder Name</label>
            <br/>
            <input
              type="text"
              name="card_holder_name"
              required
              value={paymentInfo.card_holder_name}
              onChange={handleChange}
            />
            <br />
            <button className="button">Continue</button>
          </form>
        </div>
      ) : (
        <div>No order information available</div>
      )}
    </div>
  );
};

export default PaymentEntry;
