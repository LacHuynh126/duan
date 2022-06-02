var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var UserSchema = new mongoose.Schema({
  id: { type: ObjectId },
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
});
module.exports = mongoose.model('users_duantotnghieps', UserSchema);