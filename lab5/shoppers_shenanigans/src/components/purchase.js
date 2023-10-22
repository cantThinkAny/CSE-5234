import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

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

  useEffect(()=>{
      // query the order info
      axios.get("http://localhost:7000/get_item", {
        params: {} 
      }).then((data)=>{
        const data_ = JSON.parse(JSON.stringify(data.data));
        data_.forEach(order_ => {
          order.buyQuantity[order_.Id-1] = order_.quantity
        });
        setOrder({...order});
      });
  },[])


  const purchaseHandler = event => { 
    event.preventDefault();
    const array1  = [1,2];
    axios
      .post("http://localhost:7000/update_quantity", {
        names: array1,
        quantity: order.buyQuantity,
        user_uid: -1})
      .then((data)=>{
        const res_data = data.data; 
        if (res_data.length > 0) { alert(res_data); }
        else{navigate('/purchase/paymentEntry', {state: {order: order}});}
        })
      .catch((e) => {alert("failed", e);});}
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
    <form onSubmit={purchaseHandler}>
      <label>Product 1</label>
      <input
        type="number"
        value={order.buyQuantity[0]}
        required onChange={(e) =>
          { order.buyQuantity[0] = e.target.value;
            setOrder({...order});}}
      />
      <br/>
      <label >Product 2</label>
      <input
        type="number"
        value={order.buyQuantity[1]}
        required onChange={(e) =>
          { order.buyQuantity[1] = e.target.value; 
            setOrder({...order});}}
      />
      <br/>
      <button className='button'>Pay</button>
    </form>
  </div>
  );
};

export default Purchase;
