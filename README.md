# HMS_DEV

This document will outline the step-by-step approach of the booking engine that about to form. The built will consist
of many parts and I would like to start with the rooms and booking, then follow by users and authentication components.
Since they are the four core components of the Back-End project. As I move further down the stretches, there will be more
updates and edited in the documentation for better clarity and logics.

Room Component:

1. Currently my design will start from the api folder: ./api/src/ as the parent directory for the project. I started
   ../models, ../resolvers and ./schema as these folders and files grow I will either break it down to sub-components or branch
   it out to other more specific sub-components.

2. Codes:
   the room components will have room.js and types.js respectively for their roles.
3. The core input to create a booking will be {customerId, [reservationInputs]}
   [const reservationInput: {
   checkIn: any;
   checkOut: any;
   customer: any;
   room: any;
   numberOfGuest: any;
   }
   ]
4. The createBooking(bookingInput: BookingInput): Booking, will take in the object (line 3) and parse the inputs then
   call on createReservation() and createReservationRecord() to complete the task. the basic booking will return a
   Booking, Reservavtion(s) and ReservationRecord(s).
