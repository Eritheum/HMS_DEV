const { buildSchema } = require("graphql");

module.exports = buildSchema(`
   type Reservation {
      _id: ID!
      checkinDate: String!
      checkoutDate: String!
      guest: String!
      numberOfGuest: Int!
      createdAt: String!
      updatedAt: String!
   }
   input ReservationInput {
      checkinDate: String!
      checkoutDate: String!
      guest: String!
      numberOfGuest: Int!
   }
   type RootQuery {
      reservations: [Reservation!]!
    }
    type RootMutation {
      createReservation (reservationInput: ReservationInput): Reservation
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
