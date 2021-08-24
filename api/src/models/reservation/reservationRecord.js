const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationRecordSchema = new Schema({
   checkIn: {
      type: Date,
      required: true
   },
   checkOut: {
      type: Date,
      required: true
   },
   isBlocked: {
      type: Boolean,
      required: true
   },
   room: {
      type: Schema.Types.ObjectId,
      ref: 'Room'
   },
   reservation: {
      type: Schema.Types.ObjectId,
      ref: 'Reservation'
   }
},
   { timestamps: true })

module.exports = mongoose.model('ReservationRecord', reservationRecordSchema);