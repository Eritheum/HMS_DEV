const Booking = require('../models/booking')
const { createReservation } = require('../resolvers/reservations')

module.exports = {
   createBooking: async (args) => {
      const booking = new Booking({
         firstName: args.bookingInput.firstName,
         lastName: args.bookingInput.lastName,
         numberOfRoom: args.bookingInput.numberOfRoom,
         checkIn: args.bookingInput.checkIn,
         checkOut: args.bookingInput.checkOut
      });
      // try {
      //    let reservations = [];
      //    for (let i = 1; i <= args.bookingInput.numberOfRoom; i++) {
      //       createReservation
      //    }
      // } catch (err) {
      //    console.log(err)
      //    throw err;
      // };
      try {
         const result = await booking.save();
         console.log(result);
         return { ...result._doc };
      } catch (err) {
         console.log(err);
         throw err;
      }
   },

};