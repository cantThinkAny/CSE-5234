import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewOrder = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch the order details from the server
    axios.get('/api/orders/123')
      .then(response => setOrder(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Order Details</h1>
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
          {order && order.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Payment Information</h2>
      <p>Payment Method: {order && order.paymentMethod}</p>
      <p>Total Amount: {order && order.totalAmount}</p>
      <h2>Shipping Details</h2>
      <p>Address: {order && order.shippingAddress}</p>
      <p>City: {order && order.shippingCity}</p>
      <p>Country: {order && order.shippingCountry}</p>
    </div>
  );
};

export default ViewOrder;