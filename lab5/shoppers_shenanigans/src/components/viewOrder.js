import React, { useEffect, useState } from "react";

const ViewOrder = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch the order details from the state
    const locationState = window.history.state?.state;
    if (locationState) {
      setOrder(locationState.order);
    }
  }, []);

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
          <p>Credit Card Number: {order.paymentInfo.credit_card_number}</p>
          <p>Expiration Date: {order.paymentInfo.expiration_date}</p>
          <p>CVV Code: {order.paymentInfo.cvvCode}</p>
          <p>Card Holder Name: {order.paymentInfo.card_holder_name}</p>
          {/* Add other payment information fields if available */}
          <h2>Shipping Details</h2>
          <p>Name: {order.shippingInfo.name}</p>
          <p>Address Line 1: {order.shippingInfo.addressLine1}</p>
          <p>Address Line 2: {order.shippingInfo.addressLine2}</p>
          <p>City: {order.shippingInfo.city}</p>
          <p>State: {order.shippingInfo.state}</p>
          <p>ZIP Code: {order.shippingInfo.zip}</p>
          {/* Add other shipping information fields if available */}
        </div>
      ) : (
        <div>No order details available</div>
      )}
    </div>
  );
};

export default ViewOrder;
