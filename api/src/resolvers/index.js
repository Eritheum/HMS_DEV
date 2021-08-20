const reservationResolver = require("./reservations");
const customerResolver = require("./customers");
const bookingResolver = require('./bookings')

const rootResolver = {
  ...reservationResolver,
  ...customerResolver,
  ...bookingResolver
};

module.exports = rootResolver;
