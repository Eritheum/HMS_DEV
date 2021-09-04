const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    bookingNumber: {
      type: String,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    reservations: {
      type: [Schema.Types.ObjectId],
      ref: "Reservation",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema);
