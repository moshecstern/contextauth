const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  userID: { type: String, required: false },
  username: { type: String, required: false },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: false },
  businessname: { type: String, required: false },
  state: { type: String, required: false },
  timeinbusiness: { type: String, required: false },
  reasonforfunding: { type: String, required: false },
  howdidyouhearaboutus: { type: String, required: false },
  comments: { type: String, required: false },
  phone: { type: Number, required: false },
  amountseeking: { type: Number, required: false },
  monthlysales: { type: Number, required: false },
  estimatedcreditscore: { type: Number, required: false },
  consent: { type: Boolean, required: false },
  date: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;