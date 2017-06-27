// User.js

 const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   points: Number,
   race: String,
   ethnicity: String, /* list of constants defined in util folders */
   district: String,
   school: String,
   yearInSchool: String,
   postPlans: String,
   extraInterest: String,
   careerInterest: String
 })
 mongoose.model('User', userSchema)

 module.exports = mongoose.model('User')

// User.js
/* const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
mongoose.model('User', UserSchema)

module.exports = mongoose.model('User') */
