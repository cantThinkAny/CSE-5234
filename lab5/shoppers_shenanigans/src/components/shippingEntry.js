import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShippingEntry = () => {
  const location = useLocation();
  const order = location.state?.order;
  const paymentInfo = location.state?.paymentInfo;
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can validate and save shippingInfo
    navigate("/purchase/viewOrder", {
      state: { order, paymentInfo, shippingInfo }
    });
  };

  return (
    <div>
      <h1>Shipping Information</h1>
      {order && paymentInfo ? (
        <div>
          {/* Display order details and payment information here */}
          <h2>Order Details</h2>
          <p>Product 1: {order.buyQuantity[0]}</p>
          <p>Product 2: {order.buyQuantity[1]}</p>

          <h2>Payment Information</h2>
          <p>Credit Card Number: {paymentInfo.credit_card_number}</p>
          <p>Expiration Date: {paymentInfo.expiration_date}</p>
          <p>CVV Code: {paymentInfo.cvvCode}</p>
          <p>Card Holder Name: {paymentInfo.card_holder_name}</p>

          <form onSubmit={handleSubmit}>
            {/* Shipping input fields */}
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={shippingInfo.name}
              onChange={handleChange}
            />
            <br />
            <label>Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              required
              value={shippingInfo.addressLine1}
              onChange={handleChange}
            />
            <br />
            <label>Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              value={shippingInfo.addressLine2}
              onChange={handleChange}
            />
            <br />
            <label>City</label>
            <input
              type="text"
              name="city"
              required
              value={shippingInfo.city}
              onChange={handleChange}
            />
            <br />
            <label>State</label>
            <input
              type="text"
              name="state"
              required
              value={shippingInfo.state}
              onChange={handleChange}
            />
            <br />
            <label>ZIP Code</label>
            <input
              type="text"
              name="zip"
              required
              value={shippingInfo.zip}
              onChange={handleChange}
            />
            <br />
            <button className="button">Continue</button>
          </form>
        </div>
      ) : (
        <div>No order and payment information available</div>
      )}
    </div>
  );
};

export default ShippingEntry;
