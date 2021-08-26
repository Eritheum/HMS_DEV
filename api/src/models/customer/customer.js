const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
   title: {
      type: String,
      required: false,
   },
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
      required: true,
   },
   middleName: {
      type: String,
      required: false,
   },
   email: {
      type: String,
      required: false,
   },
   password: {
      type: String,
      required: false,
   },
   customerInfo: {
      type: String,
      required: true,
   },
});
module.exports = mongoose.model("Customer", customerSchema);
