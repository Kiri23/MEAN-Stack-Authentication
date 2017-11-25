//Modules d
const mongoose = require('mongoose');
// to encrypt files
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//archivosEscuela Schema
const archivosEscuelaSchema = mongoose.Schema({
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
  numberOfFiles: {
     type:Number
    //  validate:[arrayLimit,'{PATH} excedio el total de archivo a subir']
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

const archivosEscuela = module.exports = mongoose.model('srchivosEscuela',archivosEscuelaSchema);

// Get a archivosEscuela by the id
module.exports.getUserById = function(id,callback){
  archivosEscuela.findById(id,callback);
};

// Get the Latest archivosEscuela
module.exports.getLatestUser = function(callback){
  // archivosEscuela.find({},callback);

  // output the result as an array
  archivosEscuela.find({}).sort({$natural:-1}).limit(5).lean().exec(callback);
};

module.exports.getAllArchivos = function(callback){
  // Find all users
  archivosEscuela.find({},callback)
}

module.exports.skipUser = function(skipNumberUser,callback){
  // Skip archivosEscuela in the Database
  archivosEscuela.find({},callback).skip(skipNumberUser,7)
}

// Get a archivosEscuela by their username
module.exports.getArchivosCountByEscuela = function(escuelaName,callback){
  const query = {nombreEscuela: escuelaName}
  console.log("Qeury for the db " + query.nombreEscuela)
  archivosEscuela.findOne(query,callback);
};
/** 
 * This function is to add a new archivosEscuela to the Database. This function save a password hash and dont save in Plain Text
 * @memberof archivosEscuela
 */
// Add archivosEscuela to the Database
module.exports.addArchivos = function(newUser,callback){
    //save archivosEscuela
    newUser.save(callback);
};

// Get the archivosEscuela role from the db
module.exports.getUserRole = function(id,callback ){
  // this return only the role field and the object id aka the id of the archivosEscuela
  // to exclude a field like the _id you can set the option to #0. like this _id:0
  // reference: https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/
  archivosEscuela.find({_id:id},{role:1,name:1}).exec(callback)
}

module.exports.numberOfEscuelas = function(escuela,callback){
  if(escuela == undefined){
    return res.json({success:false,msg:"Error no hay una escuela definidad para buscar"})
  }
  if (! typeof escuela === 'string' || ! escuela instanceof String){
    return res.json({success:false,msg:"Nombre de escuela no valido"});
  }
  archivosEscuela.count({nombreEscuela:escuela},callback)
}

/** Function para escoger todas las ecuelas 
 * @memberof archivosEscuela
 * @return All the name of the escuelas that archivosEscuela is In.
 */
module.exports.getAllEscuelas = function(callback){
  archivosEscuela.distinct('nombreEscuela',callback);
}
/** Get name of the archivosEscuela by the name of his school */
module.exports.getUserByEscuela = function(escuela,callback){
  archivosEscuela.find({nombreEscuela:escuela},{name:1,nombreEscuela:1,file:1,_id:1}).exec(callback)  
  // archivosEscuela.find({nombreEscuela:escuela},{name:1,nombreEscuela:1,file:1,_id:1}).exec(callback)
}

// Get File Uploaded
module.exports.getFileUploaded = function(id,callback){
  console.log("getFileUploaded method Model Call");
  console.log("UserId from Model archivosEscuela: " + id);
  archivosEscuela.find({_id:id},{file:1,name:1,_id:1}).exec(callback)
}

// no funciona
// module.exports.addFileToUser = function(id,file,callback){
//   archivosEscuela.findById(id,callback){
//     if(err){
//       throw err;
//     }
//     if (file == undefined){
//       return "Error. File is not defined"
//     }
//     archivosEscuela.file = file;
//     archivosEscuela.save(callback){
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
    // This isMatch is going to be rturned i  the callback of bcrypt.compare. This is going to compare the password and return true if is match and do the callback and create the token in the archivosEscuela.js Route Autheticaction
    callback(null,isMatch);

  })
};

// file limit upload
function arrayLimit(val) {
  return val.length <= 5;
}

function sumFile(val){
    return val 
}