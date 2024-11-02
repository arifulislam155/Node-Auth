const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: true,
      trim: true
   },
   lastName: {
      type: String,
      required: true,
      trim: true
   },
   age: {
      type: Number,
      required: true,
      min: 0
   },
   bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
   },
   phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10,15}$/, 'Please enter a valid phone number']
   }
}, {
   timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
