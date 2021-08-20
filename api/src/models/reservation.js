const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    numberOfGuest: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
