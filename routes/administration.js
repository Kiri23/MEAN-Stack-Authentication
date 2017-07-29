// Contain the endpoint for all the Administrator routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/databse');
var upload = require ('../config/multer');

const Administration = require('../models/administrator');
const fileName = require('../models/filename');

//aget6 shortcut for app.get

// Register
// cause whe're in the Administrator file is Administrator/register
router.post('/register', (req, res,next) => {
  console.log("llego a la ruta del register administrator");
  // Administration Object Retriev Administrator Properties from Form
  let newAdministrator = new Administration({
    name: req.body.user.name,
    email: req.body.user.email,
    username: req.body.user.username,
    password: req.body.user.password
  });
// Add Administration to mongoDb
  Administration.addAdministrator(newAdministrator,(err, Administrator) => {
    if(err){
      console.log(err + " adding Administrator");
      res.json({success: false, msg:'Failed to register Administrator',error:err});
    }else{ // addAdministrator to the Database
      res.json({success:true,msg:'Administration Registered',Administrator:newAdministrator});
    }
  });
// End add Administration logic

})

// Authenticate Route
router.post('/authenticate', (req, res,next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Get the Administrator to authenticate
  Administration.getAdministratorByUsername(username,(err,Administrator) => {
    if (err) throw err;
    if(!Administrator){
      return res.json({success:false,msg:'Administration not found'});
    }
    // Compare the Password
    Administration.comparePassword(password,Administrator.password,(err,isMatch) => {
      if (err) throw err;
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
        return res.json({success:false,msg:'Wrong password'});
      }

    });


  })

});

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
       let nameFile = new fileName({
         name:req.file.grid.filename,
         id:req.file.grid._id
       })
       fileName.addFileName(nameFile,(err,file)=> {
         if (err){
           console.log("Error saving fileName");
         }else {
           console.log("File Name saved Succesfully");
         }

       });

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
// El passport Config file tengo que cambiarlo para que funcione con administrator. crear otro metodo para administrator
router.get('/profile',passport.authenticate('jwt',{session:false}),(req, res,next) => {
  res.json({Administrator:req.Administrator});
});

// Get a Administrator by their Id
router.get('/getAdministratorById', (req, res) => {
  var id = req.query.AdministratorId;
  Administration.getAdministratorById(id,(err,data) => {
    if (err){
      return res.json(err);
    }
    return res.json({Administrator:data})
  });

});

// get the Latest Administrator from Database
router.get('/getLatestAdministrators', (req, res) => {
  Administration.getLatestAdministrator((err, Administrator) => {
    if (err){
      return res.json(err);
    }
    // console.log(Administrator[0].name + " latest Administrator from api");
    res.send(Administrator);
  })

});

// get all the Administrator from Database
router.get('/getAllAdministrators', (req, res) => {
  Administration.getAllAdministrator((err, Administrator) => {
    if (err){
      return res.json(err);
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
      return res.json(err);
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
        return res.json(err);
      }
      res.json(AdminRole);

    })
});

router.get('/ping', (req, res) => {
    return res.json('pong');
});


module.exports = router;
