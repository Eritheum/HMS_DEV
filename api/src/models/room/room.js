const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
   roomNumber: {
      type: Number,
      required: true
   },
   roomName: {
      type: String,
      required: true
   },
   roomStatus: {
      type: Boolean,
      required: true
   },
   roomDetails: {
      type: String,
      required: true
   },
   isHotelPool: {
      type: Boolean,
      required: true
   },
   roomType: {
      type: Schema.Types.ObjectId,
      ref: 'RoomType'
   }
})

module.exports = mongoose.model('Room', roomSchema)