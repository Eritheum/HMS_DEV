const Reservation = require("../models/reservation");
const { customerLookups } = require("./lookups");

module.exports = {
  reservations: async () => {
    try {
      const reservations = await Reservation.find();
      return reservations.map((reservation) => {
        console.log(reservation.customer)
        return {
          ...reservation._doc,
          customer: customerLookups.bind(this, reservation.customer)
        };
      });
    } catch (err) {
      throw err;
    }
  },

  createReservation: async (args) => {
    const reservation = new Reservation({
      checkIn: args.reservationInput.checkIn,
      checkOut: args.reservationInput.checkOut,
      customer: '611e84a3a38ef4346d3c218e',
      numberOfGuest: args.reservationInput.numberOfGuest,
    });
    try {
      const result = await reservation.save();
      return {
        ...result._doc
      };
    } catch (err) {
      throw err;
    }
  },
};