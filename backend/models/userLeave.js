const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userComplaints = mongoose.Schema(
  {
    leaveTitle: {
      type: String,
      required: [true, 'Please add a Title'],
    },
    leaveBody: {
      type: String,
      required: [true, 'Please add a body'],
    },
    adminResponse: {
      type: Boolean,
    },
    userId: {
      type: Boolean,
      // type: Schema.Types.ObjectId, ref: 'AllUsers',
      required: [true, 'Please add a user ID']
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('userLeave', userComplaints)