// Contain the endpoint for all the Administrator routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const assert = require('assert')
const AssertionError = require('assert').AssertionError

const config = require('../config/database');
var upload = require ('../config/multer');
var errorUtility = require('../utilities/error')


const Administration = require('../models/administrator');
const fileName = require('../models/filename');

//aget6 shortcut for app.get



// Register
// cause whe're in the Administrator file is Administrator/register
router.post('/register', (req, res,next) => {
  console.log("llego a la ruta del register administrator");
  
  try {
    // Administration Object Retriev Administrator Properties from Form
    let newAdministrator = new Administration({
      name: req.body.user.name,
      email: req.body.user.email,
      username: req.body.user.username,
      password: req.body.user.password
    });
    
    
    // Validation error. This throw an error and I trying to cacth the error and respond to it   
   assert.notEqual(newAdministrator, undefined,"Algunos campos no fueron llenados correctamente por favor intente otra vez. Extra informacion algunos de los campos son indefinidos")
    assert.notEqual(newAdministrator.password,undefined,"El campo de la contraseña no fue llenado. Si lo lleno intentelo de nuevo otra vez. Extra informacion ruta register")

  // Add Administration to mongoDb. Esta es una llamada al modelo.
    Administration.addAdministrator(newAdministrator,res,(err, Administrator) => {
      if(err){
        console.log(err.message + " adding Administrator from administration/register");
        err.customMsg = "Error guardando cuenta de administrador en la base de datos pero con customMessage Errors"
        // This will pass the error to the epxress error handling defined in app.js
        return next(err)
      }else{ // addAdministrator to the Database
        console.log("Este es adm " + Administrator)
        res.json({success:true,msg:'Administrador Registrado',Administrator:newAdministrator});
      }
    });
 }catch(error){
   if (error instanceof AssertionError){
     errorUtility.sendErrorHttpJsonMessage(res,error,error.message)
   }else {
     var message = "Error no documentado cuando se crea un administrador. Error: " + error.message
     errorUtility.sendErrorHttpJsonMessage(res,error,message)
   }
 }
// End add Administration logic
})

// Authenticate Route
router.post('/authenticate', (req, res,next) => {
  try{
    const username = req.body.username;
    const password = req.body.password;
    assert.notEqual(username, undefined,"Autenticando el Administrador. El nombre de Usuario no esta definido. Code Nod") 
    assert.notEqual(password, undefined,"Autenticando el administrador. La contraseña no esta definida. Code Nod") 

    // Get the Administrator to authenticate
    Administration.getAdministratorByUsername(username,(err,Administrator) => {
      if (err) {
        errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error buscando el administrador por su nombre de usuario para autenticar. Code nod")
      }
      if(!Administrator){
        return res.json({success:false,msg:'No se encontro ningun administrador con ese nombre de usuario para autenticar'});
      }
      // Compare the Password
      Administration.comparePassword(password,Administrator.password,(err,isMatch) => {
        if (err) {
          errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error buscando el administrador por su contraseña para autenticar. Code nod")
        }
        // if the password match
        if(isMatch){
          // construct the token- it has option
          const token = jwt.sign(Administrator,config.secret,{
            expiresIn:120000 // 20 minutes
          });
          // Send the reponse in Json Format
          res.json({success:true,
            token:'JWT '+token,
            Administrator:{
              id:Administrator._id,
              name:Administrator.name,
              username:Administrator.username,
              email:Administrator.email
            }
          });
        }
        // if no match
        else {
          return res.json({success:false,msg:'No se encontro ningun administrador con esa contraseña para autenticar'});
        }

      });


    })
  }catch(error){
    if (error instanceof AssertionError){
      errorUtility.sendErrorHttpJsonMessage(res,error,error.message)
    }else {
      var message = "Error no documentado cuando se autentica un administrador. Error: " + error.message
      errorUtility.sendErrorHttpJsonMessage(res,error,message)
    }
  }
});

// route to upload a file
router.post('/upload',(req, res) => {
  upload(req,res,function(err){
    console.log("administration upload body in upload method: " +JSON.stringify(req.body, null, 4));
      if(err){
        errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error subiendo el archivo. Code nod")
      }
      console.log("Filename of the file " + req.file.grid.filename);
      console.log("id of the file " + req.file.grid._id);

     //  Save the name of the file here to naother databse for easy retireval
       let nameFile = new fileName({
         name:req.file.grid.filename,
         id:req.file.grid._id
       })
       fileName.addFileName(nameFile,(err,file)=> {
         if (err){
          errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error guardando el archivo. Code nod")
         }else {
           console.log("File Name saved Succesfully");
         }

       });

       res.json({
         success: true,
         msg: "Archivo guardado exitosamente",
         error_code:0,
         err_desc:null,
         file:req.file,
         filename:req.file.grid.filename,
         dbId: req.file.grid._id
       });
  });
});

// protect route with our Authentication, Our Token
// Profile Route
// El passport Config file tengo que cambiarlo para que funcione con administrator. crear otro metodo para administrator
router.get('/profile',passport.authenticate('jwt',{session:false}),(req, res,next) => {
  res.json({Administrator:req.Administrator});
});

// Get a Administrator by their Id
router.get('/getAdministratorById', (req, res) => {
  var id = req.query.AdministratorId;
  Administration.getAdministratorById(id,(err,data) => {
    if (err){
      return errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error encontrando el administrador por su ID. Code nod")
    }
    return res.json({success:true,Administrator:data})
  });

});

// get the Latest Administrator from Database
router.get('/getLatestAdministrators', (req, res) => {
  Administration.getLatestAdministrator((err, Administrator) => {
    if (err){
      return errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error encontrando los ultimos administradores registrados. Code nod")
    }
    // console.log(Administrator[0].name + " latest Administrator from api");
    res.send(Administrator);
  })

});

// get all the Administrator from Database
router.get('/getAllAdministrators', (req, res) => {
  Administration.getAllAdministrator((err, Administrator) => {
    if (err){
      return errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error encontrando todos los administradores registradores. Code nod")
    }
    // console.log(Administrator[0].name + " All Administrator from the api");
    res.send(Administrator);
  })

});

// Skip Administrator from Database
router.get('/skipAdministrators', (req, res) => {
  var number = req.query.skipNumber;
  console.log(number , "number to skip api");
  // Convert number to string
  Administration.skipAdministrator(parseInt(number),(err, Administrator) => {
    if (err){
      return errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error bricando los administradores. Code nod")
    }
    // console.log(Administrator[0].name + " Skip Administrator from the api");
    res.send(Administrator);
  })

});

// EndPoit for the Role of the Admin
router.get('/getAdminRole', (req, res) => {
    var roleNumber = req.query.role;
    Administration.getAdminRole(roleNumber,(err, AdminRole) => {
      if (err){
        return errorUtility.sendErrorHttpJsonMessage(res,err,"Ocurrio un error obteniendo el rol del administrador. Code nod")
      }
      res.json(AdminRole);

    })
});

router.get('/ping', (req, res,next) => {
    throw(new Error("Error para prueba en ruta"));
    // return res.json('pong');
});


module.exports = router;
