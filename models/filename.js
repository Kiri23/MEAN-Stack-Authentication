//Modules d
const mongoose = require('mongoose');
const config = require('../config/database');

//FileName Schema
const FileNameSchema = new mongoose.Schema({
  name: {
    type: String
  },
  id:{
    type:String
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
const FileName = module.exports = mongoose.model('FileName',FileNameSchema);

// Get a FileName by the id
module.exports.getfileNameById = function(id,callback){
  FileName.findById(id,callback);
};

// Get the Latest FileName
module.exports.getLatestfile = function(callback){
  // FileName.find({},callback);

  // output the result as an array
  FileName.find({},{name:1,id:1}).sort({$natural:-1}).limit(5).lean().exec(callback);
};

module.exports.getAllFileName = function(callback){
  // Find all FileNames
  FileName.find({},callback)
}

module.exports.skipFileName = function(skipNumberFileName,callback){
  // Skip FileName in the Database
  FileName.find({},callback).skip(skipNumberFileName,7)
}

// Get a FileName by their FileNamename
module.exports.getFileNameByname = function(FileNamename,callback){
  const query = {name: fileName}
  FileName.findOne(query,callback);
};

// Add FileName to the Database
module.exports.addFileName = function(newFileName,callback){
  //save FileName
  newFileName.save(callback);
};

// Get the FileName role from the db
module.exports.getFileNameRole = function(id,callback ){
  // this return only the role field and the object id aka the id of the FileName
  // to exclude a field like the _id you can set the option to #0. like this _id:0
  // reference: https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/
  FileName.find({_id:id},{role:1,name:1}).exec(callback)
}
