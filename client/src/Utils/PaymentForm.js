const config = {
    // Initialize the payment form elements
    
    //TODO: Replace with your sandbox application ID
    applicationId: process.env.REACT_APP_APLLICATION_ID_PRODUCTION,
    inputClass: 'sq-input',
    autoBuild: false,
    // Customize the CSS for SqPaymentForm iframe elements
    inputStyles: [{
        fontSize: '16px',
        lineHeight: '24px',
        padding: '16px',
        placeholderColor: '#a0a0a0',
        backgroundColor: 'transparent',
    }],
    // Initialize the credit card placeholders
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: 'Card Number'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    // SqPaymentForm callback functions
    callbacks: {
        /*
        * callback function: cardNonceResponseReceived
        * Triggered when: SqPaymentForm completes a card nonce request
        */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
        if (errors) {
            // Log errors from nonce generation to the browser developer console.
            console.error('Encountered errors:');
            errors.forEach(function (error) {
                console.error('  ' + error.message);
            });
            alert('Encountered errors, check browser developer console for more details');
            return;
        }
        //    alert(`The generated nonce is:\n${nonce}`);
           // 'Authorization': process.env.REACT_APP_ACCESS_TOKEN
           // 'Authorization': 'Bearer'+  process.env.REACT_APP_ACCESS_TOKEN
           fetch(process.env.PORT? process.env.PORT + '/process-payment' : 'http://localhost:3000/process-payment', {
              method: 'POST',
              // authHeader = { Authorization = 'Bearer  {0}' -f process. },
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+process.env.REACT_APP_ACCESS_TOKEN_PRODUCTION
              },
              body: JSON.stringify({
                nonce: nonce
              })
            //   add payment amount here to be passed throught o backend
            })
            .catch(err => {
              alert('Network error: ' + err);
            })
            .then(response => {
              if (!response.ok) {
                return response.text().then(errorInfo => Promise.reject(errorInfo));
              }
            //   update here?
              return response.text();
            })
            .then(data => {
              console.log(JSON.stringify(data));
              alert('Payment complete successfully!\nCheck browser developer console form more details');
            })
            .catch(err => {
              console.error(err);
              alert('Payment failed to complete!\nCheck browser developer console form more details');
            });
        }
      }
}

export default config;