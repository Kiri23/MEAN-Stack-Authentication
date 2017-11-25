//Modules d
const mongoose = require('mongoose');
// to encrypt files
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user Schema
const OrganizationSchema = mongoose.Schema({
  name: {
    type: String
  },   // puede ser tambien una lista ([] array) de administradores. pero por el momento no
  administrator : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Administrator'
  },
  // users that is with in an organization. esto va mostrar toda la collections de usuarios quiero que solamente muestre los de la organizacion 'x'
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  email : {
    type: String
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

const Organization = module.exports = mongoose.model('Organization',OrganizationSchema);

// Get a organization by the id
module.exports.getOrganizationById = function(id,callback){
  Organization.findById(id,callback);
};

// Get the Latest Organization
module.exports.getLatestOrganization = function(callback){
  // Organization.find({},callback);

  // output the result as an array
  Organization.find({}).sort({$natural:-1}).limit(5).lean().exec(callback);
};

module.exports.getAllOrganization = function(callback){
  // Find all Users
  Organization.find({},callback)
}

module.exports.skipOrganization = function(skipNumberOrganization,callback){
  // Skip Organization in the Database
  Organization.find({},callback).skip(skipNumberOrganization,7)
}

// Get a user by their username
module.exports.getOrganizationByName = function(organizationName,callback){
  const query = {name: organizationName}
  Organization.findOne(query,callback);
};

// Add Organization to the Database
module.exports.addOrganization = function(newOrganization,callback){
  // Hash password
  // bcrypt.genSalt(10,(err, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
  //     if(err){
  //       throw err
  //     }
  //     newUser.password = hash;
      //save user
      newOrganization.save(callback);
    // })
  // })
};

// Compare password to login
  // module.exports.comparePassword = function(candidatePassword,hash,callback){
  //   bcrypt.compare(candidatePassword,hash,(err, isMatch) => {
  //     if (err) throw err;
  //     // This isMatch is going to be rturned i  the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the user.js Route Autheticaction
  //     callback(null,isMatch);
  //
  //   })
  // };
