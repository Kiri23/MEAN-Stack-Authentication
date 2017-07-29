// Contain the endpoint for all the users routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Import third partie library js
const underscore = require('underscore');


const config = require('../config/databse');
var upload = require ('../config/multer');

const User = require('../models/user');
const Administrator = require('../models/administrator');

// const Administrator = require("./models/administrator")


//aget6 shortcut for app.get

// Register
// cause whe're in the users file is users/register
router.post('/register', (req, res,next) => {
  // User Object Retriev user Properties from Form
  // console.log(req.body.user + " hello");
  // str = JSON.stringify(req.body.user, null, 4); // (Optional) beautiful indented output.
  console.log(JSON.stringify(req.body.user, null, 4)); // how to show [object object] in console
  let newUser = new User({
    name: req.body.user.name,
    email: req.body.user.email,
    username: req.body.user.username,
    password: req.body.user.password,
    file: req.body.user.file
    // role:req.body.user.role,
    // CreatedDate:req.body.user.CreatedDate
  });
// Add User to mongoDb
  User.addUser(newUser,(err, user) => {
    if(err){
      console.log(err + " add user");
      res.json({success: false, msg:'Failed to register user',error:err});
    }else{ // addUser to the Database
      res.json({success:true,msg:'User Registered',user:newUser});
    }
  });
// End add User logic

});

// Authenticate Route
router.post('/authenticate', (req, res,next) => {
  const username = req.body.username;
  const password = req.body.password;

    // Get the user to authenticate
    User.getUserByUsername(username,(err,user) => {
      if (err) throw err;
      if(!user){

        console.log("va a buscar los administradores ahora ")
        console.log("password: " + password);
        Administrator.getAdministratorByUsername(username,(err,administrator) => {
           console.log("User Role from call from db: " + administrator.role);
            // if not administrator where found in the db
            if(!administrator){
              return res.json({success:false,msg:'User not found'});
            }
            // compare the administrator Password
            Administrator.comparePassword(password,administrator.password,(err,isMatch) => {
               userCheckPassowrd(res,err,isMatch,administrator);
            });

        });

      }
       else{
          // Compare the Password of the regular user
          User.comparePassword(password,user.password,(err,isMatch) => {
            userCheckPassowrd(res,err,isMatch,user);

          });
      }
   });
});

// Function to compare the password of a regular user or administratopr
function userCheckPassowrd(res,err,isMatch,user){
  if (err) throw err;
  // if the password match
  if(isMatch){
    // construct the token- it has option
    const token = jwt.sign(user,config.secret,{
      expiresIn:120000 // 20 minutes
    });

    console.log("User Role from authenticate route: " + user.role + "\n" +
                " from User Name: " + user.name
   );
    // Send the reponse in Json Format
    res.json({success:true,
      token:'JWT '+token,
      user:{
        id:user._id,
        name:user.name,
        username:user.username,
        email:user.email,
        role:user.role,
        CreatedDate:user.CreatedDate

      }
    });
  }
  // if no match
  else {
    return res.json({success:false,msg:'Wrong password'});
  }
}

// route to upload a file
router.post('/upload',(req, res) => {
  upload(req,res,function(err){
    console.log("body in upload method: " +JSON.stringify(req.body, null, 4));
      if(err){
           res.json({error_code:1,err_desc:err});
           return;
      }
      console.log("Filename of the file " + req.file.grid.filename);
      console.log("id of the file " + req.file.grid._id);

     //  Save the name of the file here to naother databse for easy retireval
      //  let nameFile = new fileName({
      //    name:req.file.grid.filename,
      //    id:req.file.grid._id
      //  })
      //  fileName.addFileName(nameFile,(err,file)=> {
      //    if (err){
      //      console.log("Error saving fileName");
      //    }else {
      //      console.log("File Name saved Succesfully");
      //    }
       //
      //  });

       res.json({
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
router.get('/profile',passport.authenticate('jwt',{session:false}),(req, res,next) => {
  res.json({user:req.user});
});

// Get a Users by their Id
router.get('/getUserById', (req, res) => {
  var id = req.query.userId;
  User.getUserById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({user:data})
  });

});

// get the Latest Users from Database
router.get('/getLatestUsers', (req, res) => {
  User.getLatestUser((err, users) => {
    if (err){
      return res.json(err);
    }
    console.log(users[0].name + " latest user from api");
    res.send(users);
  })

});

// get all the Users from Database
router.get('/getAllUsers', (req, res) => {
  User.getAllUser((err, users) => {
    if (err){
      return res.json(err);
    }
    console.log(users[0].name + " All users from the api");
    res.send(users);
  })

});

// Skip Users from Database
router.get('/skipUsers', (req, res) => {
  var number = req.query.skipNumber;
  console.log(number , "number to skip api");
  // Convert number to string
  User.skipUser(parseInt(number),(err, users) => {
    if (err){
      return res.json(err);
    }
    // console.log(users[0].name + " Skip users from the api");
    res.send(users);
  })

});

router.get('/getFilesUploaded', (req, res) => {
  console.log("getFilesUploaded Route");
  const userId = req.query.userId;
  console.log("User Id: "+ userId);
  User.getFileUploaded(userId,(err, file) => {
    if(err){
      console.log("Error Obteniendo Archvivos subidos por Uusario");
      return res.json({success:false,msg:"Error Obteniendo archivos subidos por usuario",error:err})
    }

    if(! underscore.isUndefined(file) || ! underscore.isNull(file) ) {
         console.log("Enviando el Json con los getFileUploaded ");
         res.json({success:true,file:file});
      }else if (underscore.isEmpty(file)){
        console.log("No hay nignun archvio subido por el usuario");
        res.json({success:false,msg:"No hay ningun archivo subido por el usuario",file:file});
      }else {
        console.log("Error al obtener Archvivos de usuarios de la base de datos");
        res.json({success:false,msg:"Error al obtener Archivos de usuarios de la base de datos",file:file})
      }
  });
});

// EndPoit for the Role of the User
router.get('/getUserRoleById', (req, res) => {
    var id = req.query.id
    // convert the string to a Int
    console.log("User Id from route Api" +id);
    // var idInt = parseInt(idStr)
    // console.log(idInt);
    User.getUserRole(id,(err,userRole) => {
      if (err){
        return res.json(err);
      }
      // get role of a Admin User
      if (underscore.isEmpty(userRole)){
          console.log(userRole + " user role");
          console.log("User Role esta vacio.encontrando role del administrador");
          Administrator.getAdminRole(id,(err,adminRole) =>{
              if (underscore.isEmpty(adminRole)){
                console.log(adminRole + " AdminRole");
                console.log("Ningun usuario del rol fue encotrado.No usuario, no administrador");
                res.json({data:false,msg:"Usuario Role no encontrado"})
              }
              // A role is found
              else {
                res.json(adminRole)
              }

          })
      }
      // Get role of a regular user
      else {
        res.json(userRole);
      }

    });
});

router.get('/ping', (req, res) => {
    return res.json('pong');
});


module.exports = router;
