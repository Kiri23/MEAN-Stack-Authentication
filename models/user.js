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
  role: {
    type:Number,
    required: true,
    default: 2
  },
  email : {
    type: String,
    unique: true,
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

const User = module.exports = mongoose.model('User',UserSchema);

// Get a user by the id
module.exports.getUserById = function(id,callback){
  User.findById(id,callback);
};

// Get the Latest User
module.exports.getLatestUser = function(callback){
  // User.find({},callback);

  // output the result as an array
  User.find({}).sort({$natural:-1}).limit(5).lean().exec(callback);
};

module.exports.getAllUser = function(callback){
  // Find all users
  User.find({},callback)
}

module.exports.skipUser = function(skipNumberUser,callback){
  // Skip User in the Database
  User.find({},callback).skip(skipNumberUser,7)
}

// Get a user by their username
module.exports.getUserByUsername = function(username,callback){
  const query = {username: username}
  User.findOne(query,callback);
};

// Add User to the Database
module.exports.addUser = function(newUser,callback){
  // Hash password
  bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err){
        throw err
      }
      newUser.password = hash;
      //save user
      newUser.save(callback);
    })
  })
};

// Get the user role from the db
module.exports.getUserRole = function(id,callback ){
  // this return only the role field and the object id aka the id of the user
  // to exclude a field like the _id you can set the option to #0. like this _id:0
  // reference: https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/
  User.find({_id:id},{role:1,name:1}).exec(callback)
}

// Compare password to login
module.exports.comparePassword = function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,(err, isMatch) => {
    if (err) throw err;
    // This isMatch is going to be rturned i  the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the user.js Route Autheticaction
    callback(null,isMatch);

  })
};
