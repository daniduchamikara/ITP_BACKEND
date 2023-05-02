const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'Please add a customer name'],
    },
    vehicleId: {
        type: String,
      required: [true, 'Please add a vehicle Id'],
    },
    dateTime: {
      type: String,
      required: [true, 'Please add an date Time'],
    },
    driverName: {
      type: String,
      required: [true, 'Please add a driver Name'],
    },
    location: {
        type: String,
        required: [true, 'Please add a location'],
    },
    driverId: {
        type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('tripShedule', userSchema)
