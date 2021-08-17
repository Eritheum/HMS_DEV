const reservation = require("../models/reservation");
const Reservation = require("../models/reservation");

module.exports = {
  reservations: async () => {
    try {
      const reservations = await Reservation.find();
      return reservations.map((reservation) => {
        return { ...reservation._doc };
      });
    } catch (err) {
      throw err;
    }
  },

  createReservation: async (args) => {
    const reservation = new Reservation({
      checkinDate: args.reservationInput.checkinDate,
      checkoutDate: args.reservationInput.checkoutDate,
      guest: args.reservationInput.guest,
      numberOfGuest: args.reservationInput.numberOfGuest,
    });
    try {
      const result = await reservation.save();
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
