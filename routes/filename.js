// Contain the endpoint for all the fileNames routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const assert = require('assert')
const AssertionError = require('assert').AssertionError
const fs = require('fs')


// Import third partie library js
const underscore = require('underscore');

const config = require('../config/database');
const modules = require('../config/modules');
const fileName = require('../models/filename');

const variables = require('../config/variables')

var gfs
//aget6 shortcut for app.get

setGfsVariable()

router.get('/file/:filename', function(req, res,next){
  try{
    gfs.collection('templateFiles'); //set collection name where every files is located in the db
    assert.notEqual(req.params.filename,undefined,"Error tiene que especificar que archivo quiere descargar. Extra informacion el parametro del nombre del archivo no esta definido")    

    /** First check if file exists */
    /** @param file - contiene el nombre del archivo, la fecha que se subio entre otra cosas relacionado al archivo */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){ 
      if (err){
        console.log("Error archivo no encontrado")
        err.customMsg = "Error el archivo no pudo ser encontrado. Intentelo nuevamente. Extra información: Este error acaba de succeder " + err.message
         // Call the express error handler in app.js        
        return next(err)
      }
        // Error Handling
        if(!files || files.length === 0){
            var err = new Error("Error en ruta para descargar archivo. Localizacion routes/filename.js-> metodo -> get->file/filename")
            err.customMsg = "Error el archivo no pudo ser encontrado o puede ser que el archivo no tiene contenido y por tal razon no se descarga. Intetelo nuevamente."
            // Call the express error handler in app.js
            return next(err)
        }

        // End error handling. Start setup to download the file
        /** set the proper content type. */
        // for viewing in the Browser
        res.set('Content-Type', files[0].contentType)  

        var filename = __dirname+'/download2.pdf'
        var fs_write_stream = fs.createWriteStream(filename);

        // De la unica forma que pueden ocurrir errores aqui es que uno de los dos stream no se pueda abrir para descargar o para escribir archivos
        /** create read stream */
        var readstream = gfs.createReadStream({
            // the file to download
            filename: files[0].filename,
            root: "templateFiles" // name of collection where all files resides in mongdb
        });
        // Como la logica funciona para bajar este archivo, es que primero yo abro un archivo y lo guardo localmente con el file system de node.js. Luego yo escribo a ese archivo y cuando yo termino de escribir a ese archivo, lo descargo con el express helper method y luego que lo descarque, lo borro localmente de la computadora.
        readstream.pipe(fs_write_stream);

        fs_write_stream.on('close',()=>{
          console.log("Cerrando de escribir imagen")
          return res.download(filename,files[0].metadata.originalname,(err)=>{
            if (err){
              console.log(err.message,'\n')
              // console.log(err)
              err.customMsg = "Error al descargar el archivo. Intentelo nuevamente"
              return next(err)
            }else {
              console.log("no erorr sa")
              fs.unlink(filename, function (err) {
                if (err){
                  console.log('file can\'t be delete after downloading')
                  throw (err);
                }
                console.log('File deleted!');
              });
            }
          })
        })

        // console.log("thiss will not be called")
        // console.log("pipe");
        // console.log(readstream.pipe(res).req.originalUrl);
        // // readstream.pipe(res) is the original one but I want the Url because I want
        // // to reference to this link in Angular2
        // return readstream.pipe(res).req.originalUrl;

        // 535
    });
  }catch(error){
    if (error instanceof AssertionError){
      variables.errorUtility.sendErrorHttpJsonMessage(res,error,error.message)
    }else {
      var message = "Error no documentado cuando se descarga un archivo. Error: " + error.message
      varibles.errorUtility.sendErrorHttpJsonMessage(res,error,message)
    }
  }
});

// Get a fileNames by their Id
router.get('/getfileNameById', (req, res) => {
  var id = req.query.fileNameId;
  fileName.getfileNameById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({fileName:data})
  });

});

// get the Latest fileNames from Database
router.get('/getLatestfile', (req, res) => {
  fileName.getLatestfile((err, fileNames) => {
    if (err){
      return res.json(err);
    }
    console.log(fileNames[0].name + " latest fileName from api");
    res.send(fileNames);
  })

});

// get all the fileNames from Database
router.get('/getAllfileNames', (req, res) => {
  fileName.getAllFileName((err, fileNames) => {
    if (err){
      return res.json(err);
    }
    console.log(fileNames[0].name + " All fileNames from the api");
    res.send(fileNames);
  })

});

// Skip fileNames from Database
router.get('/skipfileNames', (req, res) => {
  var number = req.query.skipNumber;
  console.log(number , "number to skip api");
  // Convert number to string
  fileName.skipfileName(parseInt(number),(err, fileNames) => {
    if (err){
      return res.json(err);
    }
    // console.log(fileNames[0].name + " Skip fileNames from the api");
    res.send(fileNames);
  })

});


router.get('/ping', (req, res) => {
    return res.json('pong');
});


function setGfsVariable(){
    // This need to be here. No se puede poner gfs en el file de variables porque cuando llega aqui es undefined
modules.mongoose.connection.on('open', function (ref) {
  // como es un procceso asynchronico tengo que esperar a que la conecion a la base de datos se haga
  console.log('open connection to mongo server in filenames');
     gfs = modules.Grid(modules.mongoose.connection.db); // for retrieving files and uploading file to mongodb
});
}

module.exports = router;
