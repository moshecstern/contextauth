const express = require("express");
const passport = require("passport")
require('./config/passport');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken")
const jwtSecret = require('./config/jwtConfig')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3001;
const User = require("./models/user")
// const path = require("path");
// square
// const squareConnect = require('square-connect');
// const crypto = require('crypto');
// const accessToken = process.env.ACCESS_TOKEN
// const defaultClient = squareConnect.ApiClient.instance;

// var oauth2 = defaultClient.authentications['oauth2'];
// oauth2.accessToken = accessToken;
// production: https://connect.squareup.com
// sandbox https://connect.squareupsandbox.com
// defaultClient.basePath = 'https://connect.squareup.com';

// end square


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('*', function(req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next(); 
  });

  app.options('*', cors());
  
  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  // Add routes, both API and view
  
  app.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error("error here" + err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      res.status(200).send({ message: 'user created' });
    }
  })(req, res, next);
});

app.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      User.findOne({ username: req.body.username
        }).then(user => {
          const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
          });
        });
      }
    })(req, res, next);
  });
  
  app.get(
    "/auth/google", (req, res, next) =>{
      console.log("here....")
      passport.authenticate("google", {
        scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })(req, res, next)
}
);

app.get(
  "/auth/google/callback", (req, res, next) =>{
    passport.authenticate("google", (err, user, info) => {
      const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
        expiresIn: 60 * 60,
      });
      res.cookie('JWT', token)
      res.redirect("/home")
    })(req, res, next)
  }
  );
  
  // square2
//   app.post('/process-payment', async (req, res) => {
//     const request_params = req.body;
    
//     // length of idempotency_key should be less than 45
//     const idempotency_key = crypto.randomBytes(22).toString('hex');
    
//     // Charge the customer's card
//   const payments_api = new squareConnect.PaymentsApi();
//   const request_body = {
//     source_id: request_params.nonce,
//     amount_money: {
//       amount: 100, // £1.00 charge
//       currency: 'USD'
//     },
//     idempotency_key: idempotency_key
//   };
  
//   try {
//     const response = await payments_api.createPayment(request_body);
//     res.status(200).json({
//       'title': 'Payment Successful',
//       'result': response
//     });
//   } catch(error) {
//     res.status(500).json({
//       'title': 'Payment Failure',
//       'result': error.response.text
//     });
//   }
// });
// square 2 end


app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/healthcare"
  );

  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });