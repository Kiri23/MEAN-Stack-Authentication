
//Modules d
const mongoose = require('mongoose');
// to encrypt files
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const errorUtilities = require ('../utilities/error');
const assert = require('assert')
const AssertionError = require('assert').AssertionError

//user Schema
const AministratorSchema = mongoose.Schema({
  name: {
    type: String
  },
  // users of this administrator. Reference to the user schema
  // users: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  email : {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type:Number,
    required: true,
    default: 1
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
  if (id == null || id == undefined){
    console.log("Error modelo administrador. Id no esta definido.")
    return 
  }
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

module.exports.skipAdministrator = function(skipNumberAdministrator,callback){
  // Skip Administrator in the Database
  Administrator.find({},callback).skip(skipNumberAdministrator,7)
}

// Get a user by their username
module.exports.getAdministratorByUsername = function(username,callback){
  console.log("Encontrando todos los administradores" + username);
  const query = {username: username}
  Administrator.findOne(query,callback);
};

// Add Administrator to the Database
module.exports.addAdministrator = function(newAministrator,res,callback){
  // console.log(JSON.stringify(newAministrator,null,4) + " add administrator model");
  // Hash password  
  bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(newAministrator.password, salt, (err, hash) => {
      if(err){
        console.log("Error en genSalt. Modelo del administrador.Funcion add")
        const message = "Error. El campo de la contraseña no puede quedarse sin rellenar. Si usted no ha dejo el camplo de la contraseña sin rellenar, intentelo de nuevo. Informacion extra: Succedio en el modelo del administrador";        
        // throw new Error(message + "\n \n " + err)
        return errorUtilities.sendErrorHttpJsonMessage(res,err,message)
        // callback = err.message
        // throw new Error(errorUtilities.sendModelJsonErrorMessage(err,message))
      }
      newAministrator.password = hash;
      //save user
      newAministrator.save(callback);
    })
  })
};

// Get the admin role from the db
module.exports.getAdminRole = function(id,callback){
  console.log(id + " Role from Adminsitrador");
  console.log("Encontrando rol del administrador de la base de datos.");
  // this return only the role field and the object id aka the id of the admin
  // to exclude a field like the _id you can set the option to #0. like this _id:0
  // reference: https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/.
  Administrator.find({_id:id},{role:1,name:1}).exec(callback)
}

// Compare password to login
module.exports.comparePassword = function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,(err, isMatch) => {
    if (err) throw err;
    // This isMatch is going to be returned in the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the user.js Route Autheticaction
    callback(null,isMatch);

  })
};
