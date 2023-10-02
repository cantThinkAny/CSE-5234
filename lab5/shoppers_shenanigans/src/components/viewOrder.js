import React from "react";
import { useLocation } from "react-router-dom";

const ViewOrder = () => {
  const location = useLocation();
  const { order, paymentInfo, shippingInfo } = location.state || {};


  return (
    <div>
      <h1>Order Details</h1>
      {order ? (
        <div>
          <h2>Items</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.buyQuantity.map((quantity, index) => (
                <tr key={index}>
                  <td>Product {index + 1}</td>
                  <td>{quantity}</td>
                  {/* You can add price here if you have it */}
                </tr>
              ))}
            </tbody>
          </table>
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
          {/* Add other shipping information fields if available */}
        </div>
      ) : (
        <div>No order details available</div>
      )}
    </div>
  );
};

export default ViewOrder;
