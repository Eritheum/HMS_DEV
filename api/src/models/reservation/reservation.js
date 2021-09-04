const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  reservationNumber: {
    type: String,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  numberOfGuest: {
    type: Number,
    required: true,
  },
  reservationRecords: {
    type: [Schema.Types.ObjectId],
    ref: "ReservationRecord",
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
