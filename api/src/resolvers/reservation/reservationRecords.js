const ReservationRecord = require('../../models/reservation/reservationRecord')
const { roomLookup } = require('../helpers/lookups')
const { dateToString } = require('../helpers/date')


/**** This function will take the reservation input passed down by the createReservation() functions
 then create a single reservationRecord and return a spread reservationRecor object to its caller. ********/
module.exports = {
   reservationRecords: async (arg, req) => {
      try {
         const reservationRecords = await ReservationRecord.find();
         return reservationRecords.map((result) => {
            return {
               ...result._doc,
               createdAt: dateToString(result.createdAt),
               updatedAt: dateToString(result.updatedAt),
               checkOut: dateToString(result.checkOut),
               checkIn: dateToString(result.checkIn),
               room: roomLookup.bind(this, result.room),
               id: result.id
            };
         });
      } catch (err) {
         throw err;
      }
   },

   createReservationRecord: async (args, req) => {
      if (!req.isAuth) {
         throw new Error("Unauthenticated")
      }
      const record = new ReservationRecord({
         checkIn: args.checkIn,
         checkOut: args.checkOut,
         isBlocked: false,
         room: args.room,
      });
      try {
         const result = await record.save()
         return {
            ...result._doc,
            createdAt: dateToString(result.createdAt),
            updatedAt: dateToString(result.updatedAt),
            checkOut: dateToString(result.checkOut),
            checkIn: dateToString(result.checkIn),
            room: roomLookup.bind(this, result.room),
            id: result.id
         };
      } catch (err) {
         throw err;
      }
   }
}