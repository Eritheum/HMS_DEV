const reservationResolver = require("./reservation/reservations");
const customerResolver = require("./customer/customers");
const bookingResolver = require('./booking/bookings')
const roomTypeResolver = require('./room/types')
const roomResolver = require('./room/rooms')
const reservationRecordResolver = require('./reservation/reservationRecords')
const userResolver = require('../../auth/user')

const rootResolver = {
  ...reservationResolver,
  ...customerResolver,
  ...bookingResolver,
  ...roomTypeResolver,
  ...roomResolver,
  ...reservationRecordResolver,
  ...userResolver,
};

module.exports = rootResolver;
