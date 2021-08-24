const Customer = require('../models/customer');
const ReservationRecord = require('../models/reservation/reservationRecord');
const Reservation = require('../models/reservation/reservation');
const Room = require('../models/room/room')

const customerLookup = async (customerId) => {
   try {
      const customer = await Customer.findById(customerId);
      return {
         ...customer._doc,
         _id: customer.id,
      };
   } catch (err) {
      throw err;
   }
};

const roomLookup = async (roomId) => {
   try {
      const result = await Room.findById(roomId);
      return {
         ...result._doc,
         roomType: result.roomType,
      }
   } catch (err) {
      throw err;
   }
};

const reservationRecordLookup = async (records) => {
   try {
      return records.map(async (record) => {
         const result = await ReservationRecord.findById(record);
         return {
            ...result._doc,
            room: roomLookup.bind(this, result.room)
         };
      });
   } catch (err) {
      throw err;
   }
};

const reservationLookup = async (reservations) => {
   try {
      return reservations.map(async (reservation) => {
         const result = await Reservation.findById(reservation);
         return {
            ...result._doc,
            customer: customerLookup.bind(this, result.customer),
            reservationRecords: reservationRecordLookup.bind(
               this,
               result.reservationRecords
            ),
         };
      });
   } catch (err) {
      throw err;
   }
};

exports.customerLookup = customerLookup;
exports.roomLookup = roomLookup;
exports.reservationLookup = reservationLookup;
exports.reservationRecordLookup = reservationRecordLookup;
