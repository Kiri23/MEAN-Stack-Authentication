const multer  = require('multer');
const mongoose = require('mongoose');
const config = require('./database');
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs;
var upload;
const GridFsStorage = require('multer-gridfs-storage');
// set up storage for file using mongDb (Mongoose)

/** Setting up storage using multer-gridfs-storage */
var storage = GridFsStorage({
    url: config.database,
    gfs : gfs,
    filename: function (req, file, cb) {
      var options = { year: 'numeric', month: 'long', day: 'numeric',
                      hour: 'numeric', minute:'numeric',second:'numeric'
                    };
      // verificar si el filename tiene mas de un punto y borrarselor que solo se quede con el
      // ultimo punto
      var fileName = file.originalname;
      var nameOfFile = fileName.split(".")[fileName.split(".").length -2]
      var typeOfFileName = fileName.split('.')[fileName.split('.').length -1];
      var datetimestamp = new Date().toLocaleDateString('en-US',options);

      cb(null, nameOfFile + '-' + datetimestamp + '.' + typeOfFileName);
    },
    /** With gridfs we can store aditional meta-data along with the file */
    metadata: function(req, file, cb) {
        cb(null, { originalname: file.originalname });
    },
    root: 'templateFiles' //root name for collection to store files into
});

  upload = multer({ //multer settings for single upload
    storage: storage
}).single('file');



module.exports = upload;
