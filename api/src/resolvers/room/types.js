
const RoomType = require('../../models/room/type')

module.exports = {
   createRoomType: async (args) => {
      const roomType = new RoomType({
         roomTypeName: args.roomTypeInput.roomTypeName,
         amenities: args.roomTypeInput.amenities,
         description: args.roomTypeInput.description,
         isActive: args.roomTypeInput.isActive
      });
      try {
         const result = await roomType.save();
         console.log(result);
         return result
      } catch (err) {
         throw err;
      }
   }
}