const { buildSchema } = require("graphql");

module.exports = buildSchema(`
   type Booking {
      _id: ID!
      firstName: String!
      lastName: String!
      checkIn: String!
      checkOut: String!
      createdAt: String!
      updatedAt: String!
      customer: Customer
      numberOfRoom: Int!
      reservatons:[Reservation!]
   }
   type Reservation {
      _id: ID!
      checkin: String!
      checkout: String!
      customer: Customer!
      numberOfGuest: Int!
      createdAt: String!
      updatedAt: String!
   }
   type Customer {
      _id: ID!
      title: String
      firstName: String!
      middleName: String
      lastName: String!
      email: String!
      password: String
      customerInfo: String!
   }
   input BookingInput {
      firstName: String!
      lastName: String!
      checkIn: String!
      checkOut: String!
      numberOfRoom: Int!
   }
   input CustomerInput {
      title: String
      firstName: String!
      middleName: String
      lastName: String!
      email: String!
      password: String
      customerInfo: String!
   }
   input ReservationInput {
      checkIn: String!
      checkOut: String!
      customer: String!
      numberOfGuest: Int!
   }
   type RootQuery {
      bookings: [Booking!]!
      reservations: [Reservation!]!
      customers: [Customer!]!
    }
    type RootMutation {
       createBooking(bookingInput: BookingInput): Booking
       createCustomer(customerInput: CustomerInput): Customer
      createReservation (reservationInput: ReservationInput): Reservation
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
