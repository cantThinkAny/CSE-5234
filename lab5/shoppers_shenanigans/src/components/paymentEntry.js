import React from "react";
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const PaymentEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase');
    };
    
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <h3> Payment Information </h3>
            
                <label for="cname">Name on Card</label>
                <input type="text" required id="cname" name="cardname" placeholder="John More Doe"  onChange={(e) =>
                    {location.state.order.card_holder_name= e.target.value;}} />
                <br/>
                <label for="ccnum">Credit card number</label>
                <input type="text" required id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={(e) =>
                    {location.state.order.credit_card_number= e.target.value;}}/>
                <br/>
                <label for="expmonth">Exp Month</label>
                <input type="text" required id="expmonth" name="expmonth" placeholder="September" onChange={(e) =>
                    {location.state.order.expir_month= e.target.value;}} />
                <br/>
                <div class="row">
                <div>
                    <label for="expyear">Exp Year</label>
                    <input type="text" required id="expyear" name="expyear" placeholder="2018" onChange={(e) =>
                    {location.state.order.expir_year= e.target.value;}} />
                </div>
                <br/>
                <div >
                    <label for="cvv">CVV</label>
                    <input type="text" required id="cvv" name="cvv" placeholder="352" onChange={(e) =>
                    {location.state.order.cvvCode= e.target.value;}}/>
                </div>
                </div>
                <br/>
            </form>
            <button className="button">Pay</button>
        </div>

    );
};
export default PaymentEntry;