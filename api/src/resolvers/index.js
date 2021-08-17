const reservationResolver = require("./reservations");

const rootResolver = {
  ...reservationResolver,
};

module.exports = rootResolver;
