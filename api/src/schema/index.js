const { buildSchema } = require("graphql");

module.exports = buildSchema(`
   type Booking {
      _id: ID!
      createdAt: String!
      updatedAt: String!
      customer: Customer!
      reservations:[Reservation!]
   }
   type Reservation {
      _id: ID!
      customer: Customer!
      numberOfGuest: Int!
      reservationRecords: [ReservationRecord!]
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
   type User {
      _id: ID!
      email: String!
      password: String
      createdAt: String!
      updatedAt: String!
   }
   type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int!
   }
   type Room {
      _id: ID!
      roomNumber: Int!
      roomName: String
      roomStatus: Boolean
      roomType: RoomType!
      roomDetails: String
      isHotelPool: Boolean
   }
   type ReservationRecord {
      _id: ID!
      createdAt: String
      updatedAt: String
      checkIn: String
      checkOut: String
      isBlocked: Boolean
      room: Room!
   }
   type RoomType {
      _id: ID!
      name: String!
      description: String!
      amenitites: String
      isActive: Boolean
      createdAt: String!
      updatedAt: String!
   }
   input RoomTypeInput {
      roomTypeName: String
      description: String
      amenities: String
      isActive: Boolean
   }
   input BookingInput {
      customer: String!
      reservations: [ReservationInput!]
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
      room: String!
      numberOfGuest: Int!
   }
   input ReservationRecordInput {
      checkIn: String!
      checkOut: String!
      isBlocked: Boolean
      room: String!
   }
   input RoomInput {
      roomName: String
      roomNumber: Int
      roomDetails: String
      roomStatus: Boolean
      isHotelPool: Boolean
      roomType: String
   }
   type RootQuery {
      roomTypes: [RoomType!]
      rooms: [Room!]
      bookings: [Booking!]
      reservations: [Reservation!]
      customers: [Customer!]
      login(email: String!, password: String!): AuthData
    }
    type RootMutation {
       createRoomType(roomTypeInput: RoomTypeInput):RoomType
       createRoom(roomInput: RoomInput): Room
       createReservationRecord(reservationRecordInput: ReservationRecordInput):ReservationRecord
       createBooking(bookingInput: BookingInput): Booking
       createCustomer(customerInput: CustomerInput): Customer
       createReservation (reservationInput: ReservationInput): Reservation
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
