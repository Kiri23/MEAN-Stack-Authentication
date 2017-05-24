//Modules d
const mongoose = require('mongoose');
// to encrypt files
const bcrypt = require('bcryptjs');
const config = require('../config/databse');

//user Schema

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email : {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback){
  User.findById(id,callback);
};

module.exports.getUserByUsername = function(username,callback){
  const query = {username: username}
  User.findOne(query,callback);
};

module.exports.addUser = function(newUser,callback){
  bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err){
        throw err
      }
      newUser.password = hash;
      newUser.save(callback);
    })
  })
};

module.exports.comparePassword = function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,(err, isMatch) => {
    if (err) throw err;
    // This isMatch is going to be rturned i  the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the user.js Route Autheticaction
    callback(null,isMatch);

  })
};
