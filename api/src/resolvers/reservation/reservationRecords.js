const ReservationRecord = require('../../models/reservation/reservationRecord')
const { roomLookup } = require('../../helpers/lookups')


/**** This function will take the reservation input passed down by the createReservation() functions
 then create a single reservationRecord and return a spread reservationRecor object to its caller. ********/
module.exports = {

   createReservationRecord: async (args) => {
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
            room: roomLookup.bind(this, result.room),
            id: result.id
         };
      } catch (err) {
         throw err;
      }
   }
}