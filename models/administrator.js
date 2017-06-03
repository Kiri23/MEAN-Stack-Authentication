
//Modules d
const mongoose = require('mongoose');
// to encrypt files
const bcrypt = require('bcryptjs');
const config = require('../config/databse');

//user Schema
const AministratorSchema = mongoose.Schema({
  name: {
    type: String
  },
  // users of this administrator
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Administrator'
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
  },
  // This type will auto-generate itself with default properties
  CreatedDate: {
    type: Date,
    required: true,
    default: Date.now  // To use method of Date markModified need to be use before saving data to the db watch usage note section http://mongoosejs.com/docs/schematypes.html

  },
   ModifiedDate: {
     type: Date,
  }

    /* possible values to the dataType -
      - required bolean function
        default - default values
        select
        validate - validate data before saving to the database
        get
        set
        alias
        ademas de estos se pueden usar
        string function watch notasDb.txt in this project
        number functions
        date functions
        se pueden crear custom funciones and se puede descargar ya custom funciones hechos por otros en la secion de plugins
    */
});

const Administrator = module.exports = mongoose.model('Administrator',AministratorSchema);

// Get a user by the id
module.exports.getAdministratorById = function(id,callback){
  Administrator.findById(id,callback);
};

// Get the Latest Administrator
module.exports.getLatestAdministrator = function(callback){
  // Administrator.find({},callback);

  // output the result as an array
  Administrator.find({}).sort({$natural:-1}).limit(5).lean().exec(callback);
};

module.exports.getAllAdministrator = function(callback){
  // Find all users
  Administrator.find({},callback)
}

module.exports.skipUser = function(skipNumberAdministrator,callback){
  // Skip Administrator in the Database
  Administrator.find({},callback).skip(skipNumberAdministrator,7)
}

// Get a user by their username
module.exports.getAdministratorByUsername = function(username,callback){
  const query = {username: username}
  Administrator.findOne(query,callback);
};

// Add Administrator to the Database
module.exports.addAdministrator = function(newAministrator,callback){
  // Hash password
  bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(newAministrator.password, salt, (err, hash) => {
      if(err){
        throw err
      }
      newAministrator.password = hash;
      //save user
      newAministrator.save(callback);
    })
  })
};

// Compare password to login
module.exports.comparePassword = function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,(err, isMatch) => {
    if (err) throw err;
    // This isMatch is going to be rturned i  the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the user.js Route Autheticaction
    callback(null,isMatch);

  })
};
