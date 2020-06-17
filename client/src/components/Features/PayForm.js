import React from 'react';
import config from '../../Utils/PaymentForm';


const Square = ({ paymentForm }) => {

    paymentForm = new paymentForm(config);
    paymentForm.build();

    function requestCardNonce(event) {
        event.preventDefault()
        paymentForm.requestCardNonce();
    }

// function findmorevolumes(e) {
//   e.preventDefault()
//   setoffset(offset +100)
//   console.log(offset)
//   randomtext()
// }
    
    return (
        <div id="form-container">
            <div id="sq-card-number"></div>
            <div className="third" id="sq-expiration-date"></div>
            <div className="third" id="sq-cvv"></div>
            <div className="third" id="sq-postal-code"></div>
            <button id="sq-creditcard" className="button-credit-card" onClick={requestCardNonce}> Pay $ 1.00</button>
        </div>
      
    )
}

export default Square;