const Booking = require("../../models/booking/booking");
const { createReservation } = require("../reservation/reservations");
const { reservationLookup, customerLookup } = require("../helpers/lookups");
const { dateToString } = require("../helpers/date");
const { RandomNumber } = require("../helpers/random");

module.exports = {
  bookings: async (args, req) => {
    // if (!req.isAuth) {
    //    throw new Error("Unauthenticated")
    // }
    try {
      const bookings = await Booking.find();
      return bookings.map((result) => {
        return {
          ...result._doc,
          createdAt: dateToString(result.createdAt),
          updatedAt: dateToString(result.updatedAt),
          customer: customerLookup.bind(this, result.customer),
          reservations: reservationLookup.bind(this, result.reservations),
        };
      });
    } catch (err) {
      throw err;
    }
  },
  createBooking: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      const booking = new Booking({
        customer: args.bookingInput.customer,
        bookingNumber: RandomNumber(),
      });
      /*** parsing the the array of [ReserationInput] and sending it to createReservation() 
         to get back a new Reservation ***/
      const reservationInput = args.bookingInput.reservations;
      for (let i = 0; i < reservationInput.length; i++) {
        const input = reservationInput[i];
        booking.reservations.push(await createReservation(input, req));
      }
      await booking.save();
      return {
        ...booking._doc,
        createdAt: dateToString(booking.createdAt),
        updatedAt: dateToString(booking.updatedAt),
        customer: customerLookup.bind(this, booking.customer),
        reservations: reservationLookup.bind(this, booking.reservations),
      };
    } catch (err) {
      throw err;
    }
  },
};
