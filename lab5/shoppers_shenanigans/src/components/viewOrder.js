import React from "react";
//import { useLocation } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


const ViewOrder = () => {
  const location = useLocation();
  const { order, paymentInfo, shippingInfo } = location.state || {};
  const navigate = useNavigate();

  
  
const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can validate and save shippingInfo
    navigate("/purchase/viewConfirmation", {
      state: { order, paymentInfo, shippingInfo }
    });
  };
  return (
    <div>
      <h1>Order Details</h1>
      {order ? (
        <div>
          <h2>Items</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginRight: "20px" }}>
              <h3>Item</h3>
              {order.buyQuantity.map((_, index) => (
                <p key={index}>Product {index + 1}</p>
              ))}
            </div>
            <div style={{ marginRight: "20px" }}>
              <h3>Quantity</h3>
              {order.buyQuantity.map((quantity, index) => (
                <p key={index}>{quantity}</p>
              ))}
            </div>
            <div style={{ marginRight: "20px" }}>
              <h3>Price</h3>
              {order.buyQuantity.map((quantity, index) => (
                <p key={index}> 20 </p>))}
            </div>
            <div style={{ marginRight: "20px" }}>
              <h3>Total</h3>
              {order.buyQuantity.map((quantity, index) => (
                <p key={index}> {quantity *20} </p>))}
            </div>
          </div>
          <h2>Payment Information</h2>
          <p>Credit Card Number: {paymentInfo?.credit_card_number}</p>
          <p>Expiration Date: {paymentInfo?.expiration_date}</p>
          <p>CVV Code: {paymentInfo?.cvvCode}</p>
          <p>Card Holder Name: {paymentInfo?.card_holder_name}</p>
          {/* Add other payment information fields if available */}
          <h2>Shipping Details</h2>
          <p>Name: {shippingInfo.name}</p>
          <p>Address Line 1: {shippingInfo.addressLine1}</p>
          <p>Address Line 2: {shippingInfo.addressLine2}</p>
          <p>City: {shippingInfo.city}</p>
          <p>State: {shippingInfo.state}</p>
          <p>ZIP Code: {shippingInfo.zip}</p>
          <br />
          <form onSubmit={handleSubmit}>
          <button className="button">Confirm</button>
          </form>
          {/* Add other shipping information fields if available */}
        </div>
        
      ) : (
        <div>No order details available</div>
      )}
    </div>
  );
};

export default ViewOrder;
