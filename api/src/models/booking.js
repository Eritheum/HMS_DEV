const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   checkIn: {
      type: Date,
      required: true
   },
   checkOut: {
      type: Date,
      required: true
   },
   numberOfRoom: {
      type: Number,
      required: true
   },
   customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
   },
   reservations: {
      type: Schema.Types.ObjectId,
      ref: 'Reservation'
   },
},
   { timestamps: true })
module.exports = mongoose.model("Booking", bookingSchema);