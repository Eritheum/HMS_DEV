const reservationResolver = require("./reservation/reservations");
const customerResolver = require("./customers");
const bookingResolver = require('./bookings')
const roomTypeResolver = require('./room/types')
const roomResolver = require('./room/rooms')
const reservationRecordResolver = require('./reservation/reservationRecords')

const rootResolver = {
  ...reservationResolver,
  ...customerResolver,
  ...bookingResolver,
  ...roomTypeResolver,
  ...roomResolver,
  ...reservationRecordResolver,
};

module.exports = rootResolver;
