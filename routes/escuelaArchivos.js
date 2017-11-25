// Contain the endpoint for all the fileNames routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Import third partie library js
const underscore = require('underscore');

const config = require('../config/database');
const escuelaArchivos = require('../models/escuelaArchivos');



//aget6 shortcut for app.get
// cause whe're in the newArchivo file is newArchivo/register
// ruta para actualizar archivos
router.post('/modifiedNumberOfFiles', (req, res,next) => {
    var number;
    var queryEscuela = req.query.escuela
    console.log("Escuela: " + queryEscuela)
    let newArchivo = new escuelaArchivos({
        numberOfFiles: req.body.file,
        nombreEscuela: queryEscuela
    });
    // find only one school
    escuelaArchivos.getArchivosCountByEscuela(queryEscuela,(err, escuela) => {
    if (err){
        return res.json(err);
    }
     if(escuela){
        console.log("lenght- " + escuela)
        number = escuela.numberOfFiles
        parseInt(newArchivo.numberOfFiles)
        parseInt(number)
        console.log("Numero anterior " + number)        
        console.log("number file = " + newArchivo.numberOfFiles)
        // here Update the numbers of files uploaded
        escuela.numberOfFiles =  (newArchivo.numberOfFiles + number)
        // Update school number of files
        escuela.save((err,updatedSchool)=>{
            if (err){
                return res.json({success:false,msg:"Error al actualizar los archivos subido de la escuela",errorMessage:err.errors.msg,error:err})
            }else {
                return res.json({success:true,msg:"Actualizado correctamente el numero de archivos subidos por la escuela",updatedSchool:updatedSchool})
            }
        });
        // Add Administration to mongoDb
        // escuelaArchivos.addArchivos(newArchivo,(err, newArchivo) => {
        //     if(err){
        //         console.log(err + " adding newArchivo");
        //         res.json({success: false, msg:'Failed to register newArchivo',error:err});
        //     }else{ // addAdministrator to the Database
        //        res.json({success:true,msg:'Escuela Actualizada',newArchivo:newArchivo});
        //     }
        // });
     }else {
        // adding New School
        newArchivo.save( (err,newSchool)=> {
            if(err){
                res.json({success:false,msg:"Error al crear nueva escuela para guardas los archivos",errorMessage:err.errors.msg,error:err})
            }
            res.json({
               success:true,
               message: "Escuela Guardada Exitosamente!",
               newSchool:newSchool
          });
        })
     }
    })
  });
// End add Administration logic

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
