const Reservation = require('../../models/reservation/reservation');
const { customerLookup, reservationRecordLookup } = require("../../helpers/lookups");
const { createReservationRecord } = require('./reservationRecords')

module.exports = {
  reservations: async () => {
    try {
      const reservations = await Reservation.find();
      return reservations.map((result) => {
        return {
          ...result._doc,
          customer: customerLookup.bind(this, result.customer),
          reservationRecords: reservationRecordLookup.bind(this, result.reservationRecords),
        };
      });
    } catch (err) {
      throw err;
    }
  },
  /********createReservation() will take the reservationInput passed down from createBooking().
    this function will call the createReservationRecord() to create a record for each reservation
    with the checkIn & checkOut date.
  *********/
  createReservation: async (args) => {
    const reservationInput = {
      checkIn: args.checkIn,
      checkOut: args.checkOut,
      customer: args.customer,
      room: args.room,
      numberOfGuest: args.numberOfGuest,
    };
    const reservation = new Reservation({
      customer: reservationInput.customer,
      numberOfGuest: reservationInput.numberOfGuest,
      reservationRecords: (await createReservationRecord(reservationInput)).id,
    });
    try {
      const result = await reservation.save();
      return {
        ...result._doc,
        reservationRecords: reservationRecordLookup.bind(this, result.reservationRecords),
        customer: customerLookup.bind(this, result.customer),
      };
    } catch (err) {
      throw err;
    }
  },
};