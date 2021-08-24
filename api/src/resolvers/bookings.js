const Booking = require('../models/booking');
const { createReservation } = require('./reservation/reservations')
const { reservationLookup, customerLookup } = require('../helpers/lookups');

module.exports = {
   bookings: async () => {
      try {
         const bookings = await Booking.find();
         return bookings.map((result) => {
            return {
               ...result._doc,
               customer: customerLookup.bind(this, result.customer),
               reservations: reservationLookup.bind(this, result.reservations),
            };
         });
      } catch (err) {
         throw err;
      }
   },
   createBooking: async (args) => {
      const booking = new Booking({
         customer: args.bookingInput.customer,
      });
      try {
         const result = await booking.save();
         const reservationInput = args.bookingInput.reservations;
         for (let i = 0; i < reservationInput.length; i++) {
            let input = reservationInput[i];
            result.reservations.push(await createReservation(input));
         }
         await result.save();
         return {
            ...result._doc,
            customer: customerLookup.bind(this, result.customer),
            reservations: reservationLookup.bind(this, result.reservations),
         };
      } catch (err) {
         throw err;
      }
   },
};