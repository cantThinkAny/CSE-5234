import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backBtn from "./images/back.jpg";
import nextBtn from "./images/next.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import Shades1 from "./images/Shades-1.jpg";
import Shades12 from "./images/Shades1-2.jpg";
import CurtainRod1 from "./images/CurtainRod-1.jpg";
import CurtainRod12 from "./images/CurtainRod1-2.jpg";
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

  // let scrollContainer=document.querySelector(".gallery");
  // let backBtn=document.getElementById("backBtn");
  // let nextBtn=document.getElementById("nextBtn");
  // nextBtn.addEventListener("click",()=>{
  //   scrollContainer.style.scrollBehavior="smooth";
  //   scrollContainer.scrollLeft+=900;
  // });
  // backBtn.addEventListener("click",()=>{
  //   scrollContainer.style.scrollBehavior="smooth";
  //   scrollContainer.scrollLeft-=900;
  // });
  // scrollContainer.addEventListener("wheel",(evt)=>{
  //   evt.preventDefault();
  //   scrollContainer.scrollLeft+=evt.deltaY;
  // })
  const onClickImageFlip = (image) => {
    if (image === 0) {
      setFirstImage(!firstImage);
    } else {
      setSecondImage(!secondImage);
    }
  };

  return (
    <div>
      <h1 className="heading">Uppcoming Products</h1>
      <div className="gallery-wrap">
        <img src={backBtn} id="backBtn"></img>
        <div className="gallery">
          <div>
            <span><img src={img1}></img></span>
            {/* <span><img src={img2}></img></span> */}
            <span><img src={img3}></img></span>
            <span><img src={img4}></img></span>
          </div>
          <div>
            <span><img src={img5}></img></span>
            {/* <span><img src={img6}></img></span> */}
            <span><img src={img7}></img></span>
            <span><img src={img8}></img></span>
          </div>
      </div>
        <img src={nextBtn} id="nextBtn"></img>
      </div>
      
      <div className="product-contianer">
        <div className="product-1">
          <div className="image-container">
            <img
              src={firstImage ? Shades1 : Shades12}
              alt={firstImage ? "Shades" : "Shades2"}
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
          <label>Shades: $30</label>
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
              src={secondImage ? CurtainRod1 : CurtainRod12}
              alt={secondImage ? "Curtain Rod" : "Curtain Rod-2"}
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
          <label>Curtain Rod : $10.99</label>
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
