const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomTypeSchema = new Schema({
   roomTypeName: {
      type: String,
      required: true
   },
   amnenities: {
      type: String,
      required: false
   },
   description: {
      type: String,
      required: false
   },
   isActive: {
      type: Boolean,
      required: true
   }
},
   { timestamps: true }
);

module.exports = mongoose.model('RoomType', roomTypeSchema);