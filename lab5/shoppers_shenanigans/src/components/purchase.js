import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hoodie1 from "./images/hoodie1.jpg";
import hoodie12 from "./images/hoodie1-2.jpg";
import hoodie2 from "./images/hoodie2.jpg";
import hoodie22 from "./images/hoodie2-1.jpg";
import "./purchase.css";
const Purchase = () => {
  const [order, setOrder] = useState({
    buyQuantity: [0, 0],
    credit_card_number: "",
    expir_date: "",
    cvvCode: "",
    card_holder_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [firstImage, setFirstImage] = useState(true);
  const [secondImage, setSecondImage] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
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

  const onClickImageFlip = (image) => {
    if (image === 0) {
      setFirstImage(!firstImage);
    } else {
      setSecondImage(!secondImage);
    }
  };

  return (
    <div>
      <div className="product-contianer">
        <div className="product-1">
          <div className="image-container">
            <img
              src={firstImage ? hoodie1 : hoodie12}
              alt={firstImage ? "naruto" : "naruto-2"}
              className="scrollable-image"
            />
            <br />
            <button className="scroll-left" onClick={() => onClickImageFlip(0)}>
              ←
            </button>
            <button
              className="scroll-right"
              onClick={() => onClickImageFlip(0)}
            >
              →
            </button>
          </div>
          <label>Product 1</label>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              required
              value={order.buyQuantity[0]}
              onChange={(e) => handleQuantityChange(0, e.target.value)}
            />
          </form>
        </div>
        <div className="product-2">
          <div className="image-container">
            <img
              src={secondImage ? hoodie2 : hoodie22}
              alt={secondImage ? "gaara" : "gaara-2"}
              className="scrollable-image"
            />
            <br />
            <button className="scroll-left" onClick={() => onClickImageFlip(1)}>
              ←
            </button>
            <button
              className="scroll-right"
              onClick={() => onClickImageFlip(1)}
            >
              →
            </button>
          </div>
          <label>Product 2</label>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              required
              value={order.buyQuantity[1]}
              onChange={(e) => handleQuantityChange(1, e.target.value)}
            />
          </form>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="pay-button">
        <button className="button">Pay</button>
      </form>
    </div>
  );
};

export default Purchase;
