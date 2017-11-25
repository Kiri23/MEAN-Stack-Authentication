//Modules d
const mongoose = require('mongoose');
// to encrypt files
const bcrypt = require('bcryptjs');
const config = require('../config/database');

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
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },
  // This type will auto-generate itself with default properties
  CreatedDate: {
    type: Date,
    required: true,
    default: Date.now  // To use method of Date markModified need to be use before saving data to the db watch usage note section http://mongoosejs.com/docs/schematypes.html

  },
   ModifiedDate: {
     type: Date,
  },
  // si quiero que sea Object pongo {}, por el momento va a ser un array con los cincos nombres de archivos
  file: {
     type:[String],
     validate:[arrayLimit,'{PATH} excedio el total de archivo a subir']
   },
   nombreEscuela: {
     type:String,
     lowercase:true,
     required: true
    //  validator alomejor que trate de guardar el nombre de la misma escuela.
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

// UserSchema.pre('save', function(next) {
//   var user = this;
//   var SALT_FACTOR = 10;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
//     if (err) return next(err);
//     console.log('User Pre Save Call' + salt)
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);
//       console.log('hash: ' + hash)
//       console.log('password: ' + user.password)
//       user.password = hash;
//       console.log('password hash: ' + user.password)      
//       next();
//     });
//   });
// });

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
/** 
 * This function is to add a new user to the Database. This function save a password hash and dont save in Plain Text
 * @memberof user
 */
// Add User to the Database
module.exports.addUser = function(newUser,callback){
  console.log("password: "+ newUser.password + " from addUser Function");
  console.log("Escuela en Miniscula? sin espacio: "+ newUser.nombreEscuela + "");
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

module.exports.changePassword = function(newUser,callback){
  console.log("password: "+ newUser.password + " from addUser Function");
  console.log("Escuela en Miniscula? sin espacio: "+ newUser.nombreEscuela + "");
  // Hash password
  bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err){
        throw err
      }
      newUser.password = hash;
      console.log('new password: ' + newUser.password)
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

module.exports.numberOfEscuelas = function(escuela,callback){
  if(escuela == undefined){
    return res.json({success:false,msg:"Error no hay una escuela definidad para buscar"})
  }
  if (! typeof escuela === 'string' || ! escuela instanceof String){
    return res.json({success:false,msg:"Nombre de escuela no valido"});
  }
  User.count({nombreEscuela:escuela},callback)
}

/** Function para escoger todas las ecuelas 
 * @memberof User
 * @return All the name of the escuelas that user is In.
 */
module.exports.getAllEscuelas = function(callback){
  User.distinct('nombreEscuela',callback);
}
/** Get name of the user by the name of his school */
module.exports.getUserByEscuela = function(escuela,callback){
  User.find({nombreEscuela:escuela},{name:1,nombreEscuela:1,file:1,_id:1}).exec(callback)  
  // User.find({nombreEscuela:escuela},{name:1,nombreEscuela:1,file:1,_id:1}).exec(callback)
}

// Get File Uploaded
module.exports.getFileUploaded = function(id,callback){
  console.log("getFileUploaded method Model Call");
  console.log("UserId from Model User: " + id);
  User.find({_id:id},{file:1,name:1,_id:1}).exec(callback)
}

// no funciona
// module.exports.addFileToUser = function(id,file,callback){
//   User.findById(id,callback){
//     if(err){
//       throw err;
//     }
//     if (file == undefined){
//       return "Error. File is not defined"
//     }
//     User.file = file;
//     User.save(callback){
//       if (err){
//         throw err;
//       }
//       return userUpdate;
//     }
//   }
//
// }

// Compare password to login
module.exports.comparePassword = function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,(err, isMatch) => {
    if (err) throw err;
    // This isMatch is going to be rturned i  the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the user.js Route Autheticaction
    callback(null,isMatch);

  })
};

// file limit upload
function arrayLimit(val) {
  return val.length <= 5;
}
