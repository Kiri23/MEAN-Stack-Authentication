// Contain the endpoint for all the fileNames routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Import third partie library js
const underscore = require('underscore');

const config = require('../config/databse');
const escuelaArchivos = require('../models/escuelaArchivos');



//aget6 shortcut for app.get
// cause whe're in the newArchivo file is newArchivo/register
router.post('/add', (req, res,next) => {
    var number;
    var queryEscuela = req.query.escuela
    console.log("Escuela: " + queryEscuela)
    escuelaArchivos.getArchivosCountByEscuela(queryEscuela,(err, escuela) => {
    if (err){
        return res.json(err);
    }
    console.log("lenght- " + escuela.length)
    console.log(escuela.numberOfFiles + " All fileNames from the api");
        number = escuela.numberOfFiles
        console.log("Numero anterior " + number)
    
        console.log("llego a la ruta del register newArchivo");

        // Administration Object Retriev newArchivo Properties from Form
        let newArchivo = new escuelaArchivos({
            numberOfFiles: req.body.file,
            nombreEscuela: req.body.nombreEscuela
        });
        parseInt(newArchivo.numberOfFiles)
        parseInt(number)
        console.log("number = " + number)
        console.log("NAN - "+underscore.isNaN(newArchivo.numberOfFiles))
        console.log("NAN 2 - "+underscore.isNaN(number))
        console.log("Is Number - " + underscore.isNumber(newArchivo.numberOfFiles))
        console.log("Is Number 2 - " + underscore.isNumber(number))
        console.log("Is string 2 - " + underscore.isString(number))
        newArchivo.numberOfFiles =  (newArchivo.numberOfFiles + number)

        
        // Add Administration to mongoDb
        escuelaArchivos.addArchivos(newArchivo,(err, newArchivo) => {
            if(err){
            console.log(err + " adding newArchivo");
            res.json({success: false, msg:'Failed to register newArchivo',error:err});
            }else{ // addAdministrator to the Database
            res.json({success:true,msg:'Archivo Added',newArchivo:newArchivo});
         }
    })
  });
// End add Administration logic

})
// Get a fileNames by their Id
router.get('/getNumbe', (req, res) => {
  var id = req.query.fileNameId;
  archivosEscuela.getfileNameById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({archivosEscuela:data})
  });

});

// get the Latest fileNames from Database
router.get('/getArchivoByEscuela', (req, res) => {
  escuelaArchivos.getArchivosCountByEscuela("escuela de archivos",(err, fileNames) => {
    if (err){
      return res.json(err);
    }
    res.send(fileNames);
  })

});

// get all the fileNames from Database
router.get('/getAllArchivosEscuela', (req, res) => {
  escuelaArchivos.getAllArchivos((err, fileNames) => {
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
  archivosEscuela.skipfileName(parseInt(number),(err, fileNames) => {
    if (err){
      return res.json(err);
    }
    // console.log(fileNames[0].name + " Skip fileNames from the api");
    res.send(fileNames);
  })

});


router.get('/pingEscuela', (req, res) => {
    return res.json('pong');
});


module.exports = router;
