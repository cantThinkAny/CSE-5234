

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0, 0, 0],
    credit_card_number: "",
    expir_date: "",
    cvvCode: "",
    card_holder_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zip: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault(); // Prevent form submission
    navigate("/purchase/paymentEntry", { state: { order } });
  };

  const handleQuantityChange = (index, value) => {
    // Create a copy of the 'buyQuantity' array to update it
    const updatedQuantity = [...order.buyQuantity];
    updatedQuantity[index] = value;
    
    // Update the 'order' state with the new quantity
    setOrder((prevOrder) => ({
      ...prevOrder,
      buyQuantity: updatedQuantity
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product 1</label>
        <input
          type="number"
          required
          value={order.buyQuantity[0]}
          onChange={(e) => handleQuantityChange(0, e.target.value)}
        />
        <br />
        <label>Product 2</label>
        <input
          type="number"
          required
          value={order.buyQuantity[1]}
          onChange={(e) => handleQuantityChange(1, e.target.value)}
        />
        <br />
        <button className="button">Pay</button>
      </form>
    </div>
  );
};

export default Purchase;
