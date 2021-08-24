const Room = require('../../models/room/room');

module.exports = {
   rooms: async () => {
      try {
         const rooms = await Room.find();
         return rooms.map((room) => {
            return { ...room._doc };
         });
      } catch (err) {
         throw err;
      }
   },
   createRoom: async (args) => {
      const room = new Room({
         roomNumber: args.roomInput.roomNumber,
         roomName: args.roomInput.roomName,
         roomStatus: args.roomInput.roomStatus,
         roomDetails: args.roomInput.roomDetails,
         isHotelPool: args.roomInput.isHotelPool,
         roomType: args.roomInput.roomType
      });
      try {
         const result = await room.save();
         return result;
      } catch (err) {
         throw err;
      }
   }
}