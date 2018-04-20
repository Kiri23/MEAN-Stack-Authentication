// Contain the endpoint for all the users routes
'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// for sending email in node.js 
// Import third partie library js
const underscore = require('underscore');
// for Asychronous Code 
var async = require('async')
// for Generating a token
var crypto = require('crypto');


const config = require('../config/database');
var upload = require ('../config/multer');
const nodeEmail = require('../utilities/nodemailer')
var errorUtility = require('../utilities/error')


const User = require('../models/user');
const Administrator = require('../models/administrator');
const escuelaArchivos = require('../models/escuelaArchivos');

//aget6 shortcut for app.get

/**
 * @apiDefine error
 *
 * @apiError error Contain the error message.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "success": "false"
 *       "msg": "Failed to register user"
 *       "error": "{Object} errorMessage"
 *     }
 */


/**
* @api {post} register/ Register a new User
* @apiDescription This route is used for register a new user. In this route the name of school only check for whitespace if the school contain uppercase or aditional word is going to be different with the other school.
* @apiExample {User} NameEscuela Example:
*     ```escuela``` is different to ```escuela**s**```
*     but ```      escuela ``` is the same to ```escuela``` the nameEscuela can have space but no diffente words.
* @apiGroup User
* @apiName registerUser
* @apiSuccess {Object} user The new user store in the db.
* @apiSuccess {Bolean} success If the user got Succesfully saved in the db.
* @apiSuccess {String} msg Contain the error mesage or a Succesfully message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "success": "True",
*       "msg": "User Registered",
*       "user": "{Object} of User "
*     }
* @apiUse error
*/
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
    file: req.body.user.file,
    /** En esta parte es que le quito todos los espacios y en el modelo es que valido que toda la ```string``` sea en minisicula */
    nombreEscuela: req.body.user.nombreEscuela.toString().trim()//replace(/\s+/g, '')
    // role:req.body.user.role,
    // CreatedDate:req.body.user.CreatedDate
  });

 // setup e-mail data, even with unicode symbols
  var mailOptions = {
    from: 'christian_nogueras94@hotmail.com', // sender address (who sends)
    to: 'christian_nogueras94@hotmail.com,'+newUser.email.toString(), // list of receivers (who receives)
    subject: 'Registracion Completada a la aplicacion web OPAS ', // Subject line
    // text: '¡Su registro ha sido exitoso! ', // plaintext body
    html: ',<h3> ¡Su registro ha sido exitoso! </h3> <br> &nbsp; &nbsp;    Bienvenido a su nueva carpeta electrónica para el programa Eco Escuelas. Esta cuenta le permitirá acceder a los documentos modelos para crear sus portafolios con todos los trabajos del comité ambiental trabajos de una manera más sencilla y completa. Si tiene algún problema con el registro favor referirlo escribiendo a: nrivera.opas@gmail.com <br> ¡Gracias por su continuo apoyo!' // html body
};

  console.log("Escuela en miniscula y sin espacio " + newUser.nombreEscuela);
  User.numberOfEscuelas(newUser.nombreEscuela,(err, count) => {
    if (err){
      console.log("Error al buscar el total de escuela en la base de datos");
      res.json({success: false,msg:"Error buscando el total de professores registrado en esta escuela: "+newUser.nombreEscuela+".Intentelo de nuevo."})
    }else{
      console.log("total de escuelas: " + count + " de " + newUser.nombreEscuela);
      if (count >= 3){
        res.json({succes:false,msg:"Ya la escuela " + newUser.nombreEscuela + " llego a su limite de 3 professores por escuela"})
      }else {
        // Add User to mongoDb
          User.addUser(newUser,(err, user) => {
            if(err){
              console.log(err + " add user");
              res.json({success: false, msg:'Error creando cuenta de Professor. Intentelo nuevamente',error:err});
            }else{ // addUser to the Database
              nodeEmail.sendEmail(mailOptions);
              res.json({success:true,msg:'Professor registrado, ya se puede conectar. Pronto debe estar recibiendo un correo electrónico de confirmación',user:newUser});  
            }              
          });
        // End add User logic

        }
      }
    });
  });


  /**
   * @apiDefine throwError
   * @apiError error Throw an error message. Failed to do the main purpose of the route.
   *
   */

  /**
  * @api {post} authenticate/ Authenticate a User when Logged In
  * @apiDescription This route is used for Authenticate user when Logged In. This route get call
  * when a user attemp to Logged in to the application.
  *
  *
  * @apiGroup User
  * @apiName AuthenticateUser
  * @apiSuccess {String} msg Contain the error mesage or a Succesfully message.
  * @apiSuccess {Bolean} token Unique Token.
  * @apiSuccess {Object} user The user who logged in.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "success": "True",
  *       "token": "Unique token for each user logged in",
  *       "user": "{Object} of User "
  *     }
  * @apiUse throwError
  * @apiError UserNotFound User Not found in db.
  * @apiErrorExample UserNotFound Error:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "success": "false"
  *       "msg": "User not found"
  *     }
  */
// Authenticate Route.
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
            // if not administrator where found in the db
            if(!administrator){
              return res.json({success:false,msg:'Este usuario no se encontro en nuestro registro.'});
            }
            console.log("User Role from call from db: " + administrator.role);
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
  // TODO return a Json Error
  if (err) {
    console.log('Eror en usercheckpasword ')
    console.log('user: ',user)
    throw err;
  }
  // if the password match
  if(isMatch){
    // construct the token- it has option. Aqui en el user cuando se pasa el del administrador como tiene una referencia circular a Users aveces me tira error.
    var util = require('util');
    console.log('util inspect.',util.inspect(user))
    console.log("Aqui escratchea porque se trato de conectar un administrador y el jwt sign metodo no maneja un json circular. no se donde esta el json circular en el json del administrador ")
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
    return res.json({success:false,msg:'Contraseña incorrecta. Intentelo de nuevo.'});
  }
}

// Enpoint to send email to change password
router.post('/forgot',function (req,res,next){
  console.log('route forgot reached')
  // do asyncronous Code
  async.waterfall([
    // First Function
    function (done){
      // create a random token using the crypto libraries
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    // Second Function
    function(token, done) {
      console.log('email de recovery password ' + req.query.email)
      User.findOne({ email: req.query.email }, function(err, user) {
        if (!user) {
          console.log('No hay nigun usuario con esa cuenta')
          res.json({succes:false,msg:'No se encontro ningun usuario con esta direccion de correo electronico: ' + req.query.email + ". Recuerde que tiene que utilizar la misma direcion de correo electronico con la cual se registro."})
          return // res.redirect('/forgot');
        }
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour to expire the recovery email link 
        console.log(JSON.stringify('Usuario encontrado recovery password' + user, null, 4));

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {

      var mailOptions = {
        to: user.email,
        from: 'opaspuertorico@gmail.com',
        subject: 'Recuperacion contrasena aplicacion OPAS',
        html: 'Estas recibiendo este correo electronico porque solicistatse recuperar la contrasena en la aplicacion OPAS.\n\n' +
          'Por favor entra a este enlance para recuperar tu contrasena, o copiar este enlance en tu navegador web para completar el processo \n\n' +
          'http://' + req.headers.host + '/users/reset/' + token + '\n\n' +
          '<b> Este enlance expirara despues de una hora </b>, es recomendable que cambie la contrasena ahora. Si no solicistaste este correo eletronico por favor ignorarlo y la contrasena seguira siendo la misma.\n'
      };
      nodeEmail.sendEmail(mailOptions);
      res.json({success:true,msg:'Instrucciones para recuperar la contrasena fueron enviadas a este correo electronico: ' + user.email})
    } 
    
  ],function(err){
    if (err){
      return next(err);
    }
    res.redirect('/forgot');
  });
});

// Endpoint to get a new password
router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      res.json({success:false,msg:'Enlance invalido o es posible que ya se ha expirado. Recuerde que solamente cambiar la contrasena es valido por una hora.'}) //res.send('enlance no valido')
      return // res.redirect('/forgot');
    }
    console.log('req param token:'+ req.params.token)  
    // res.json({success:true,msg:'Enlance valido'}) //res.send('enlance no valido')    
    res.redirect('/reset?token='+ req.params.token);
    
  });
});

// Post Enpoint to change the password
router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          res.json({success:false,msg:'Enlance no valido o ya pudo haberse expirado. Recuerde que cambiar la contrasena es valido por una hora.'})
          return // res.redirect('back');
        }
        console.log('password '+ req.body.password)
        user.password = req.body.password;
        User.changePassword(user,(err,user)=>{
          if (err){
            res.json({success:false,err:err,msg:'Ha ocurrido un error al guardar la nueva contrasena. Por favor intentelo de nuevo o vuelva a pedir el cambio de contraseña'})
          }
          res.json({success:true,msg:'Contrasena cambiada existosamente. Ya se puede volver a conectar.'})
        });
        // user.resetPasswordToken = undefined;
        // user.resetPasswordExpires = undefined;
        done(err,user)
      });
    },
    function(user, done) {
      var mailOptions = {
        to: user.email,
        from: 'opaspuertorico@gmail.com',
        subject: 'Tu contrasena a la Aplicacion OPAS ha sido cambiada',
        text: 'Hola,\n\n' +
          'Este correo electronico es para confirmar que la contrasena de tu cuenta: ' + user.email + ' ha sido cambiado.\n'
      };
      console.log('enviando email contasena cambiada')
      nodeEmail.sendEmail(mailOptions);
    }
  ], function(err) {
    res.redirect('/');
  });
});

/**
* @api {post} upload/ Upload a file
* @apiDescription This route is used for user who want to upload a file.
* @apiGroup User
* @apiName UploadFile
* @apiSuccess {Intenger} error_code The error code for this operation.
* @apiSuccess {String} err_desc  Error description if there's one.
* @apiSuccess {String} file The file `upload`ed.
* @apiSuccess {String} filename The name of the file uploaded.
* @apiSuccess {String} dbId The Id of the file uploaded.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "error_code": "0",
*       "err_desc": Null,
*       "File": "BytStream of the file uploaded",
*       "FileName": "NameOfYourFile.pdf",
*       "dbId": "Unique Id"
*     }
* @apiUse throwError
* @apiError UserNotFound The user who's trying to upload this file dont exit in the DB.
* @apiError UserSaveFilenameError Error attemping to save the file of the user in the DB.
* @apiErrorExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "err": Object of err,
*       "msg": "The message of the error",
*     }
*/
// route to upload a file
router.post('/upload',(req, res) => {
  // si el userId es undefined mandar un json con una propiedad mensajes
  var userId = req.query.userId;
  console.log("UserId from users/upload: " + userId);

  upload(req,res,function(err){
    console.log("body in upload method: " +JSON.stringify(req.body, null, 4));
      if(err){
           res.json({error_code:1,err_desc:err});
           return;
      }
      console.log("body in upload method: " +JSON.stringify(req.file, null, 4));
      console.log("Filename of the file " + req.file.grid.filename);
      console.log("id of the file " + req.file.grid._id);

      User.getUserById(userId,(err,user) => {
        if (err){
          return res.json({err,msg:err.error.msg});
        }
        console.log("User Data: " +JSON.stringify(user.file, null, 4) + "\n");

        console.log("user file lenght" + user.file.length);
        // si es mayor
        // user.file.length >=5 ? user.file[user.file.length - 1] = req.file.grid.filename :
        // user.file[user.file.length] = req.file.grid.filename

        if (user.file.length >=5){
          console.log("User file lenght es mayor o igual a 5");
          // user.file[user.file.length - 1] = req.file.grid.filename
          user.file.pop();
          user.file.push(req.file.grid.filename);
        }else if (user.file.length >=0) {
          console.log("User file lenght es menor que 5 o igual a 0");
          // user.file[user.file.length] = req.file.grid.filename
          user.file.push(req.file.grid.filename)

        }else{
          return res.json({msg:"Error al guardar el archivo del usuario"})
        }

        // tiene que ir en numberOfFiles el length de req.file 
        // let newArchivo = new escuelaArchivos({
        //     numberOfFiles: 1,
        //     nombreEscuela: user.nombreEscuela
        // });

        // newArchivo.save( (err,updateNumbersOfFiles) => {
        //   if (err){
        //     // no se puede poner un return aqui sale un error cant set header after they're sent
        //     console.log("Error Updating numbers Of Files: " +JSON.stringify(err, null, 4));            
        //   }else {
        //     console.log("Numero de archivos actualizado Correctamentes")
        //   }
        // });
        updateNumberOfFilesOfSchools(user);

        user.save((err, updatedUser) => {
          if(err){
            //  data.error.errors.file.message - mostrar el mensajes de error de excdeio file archivos
            console.log("Error User Data: " +JSON.stringify(err, null, 4));
            // no se puede poner un return aqui sale un error cant set header after they're sent
          }else{
            console.log("User Data: " +JSON.stringify(updatedUser, null, 4));
            // res.json to send json date here
            console.log("Update User Succesfully");
          }
        })
        // return res.json({user:data})
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

// Helper Method Update Number of files of schools
function updateNumberOfFilesOfSchools(user){
    var number;
    var queryEscuela = user.nombreEscuela
    console.log("Escuela: " + queryEscuela)
    let newArchivo = new escuelaArchivos({
        numberOfFiles: 1,
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
               console.log("Error Updating numbers Of Files: " +JSON.stringify(err, null, 4));             
            }else {
              console.log("Actualizado correctamente el numero de archivos subidos por la escuela")
            }
        });
     }else {
        // adding New School
        newArchivo.save( (err,newSchool)=> {
            if(err){
               console.log("Error adding new school to update number of files: " +JSON.stringify(err, null, 4));             
            }else{
              console.log("Numeros de archivos para escuela Guardada Exitosamente!")
            }
            
        })
     }
    })
}

/**
* @api {get} profile/ The profile of the user
* @apiDescription This route is used to retrieve the profile of a user.
* @apiGroup User
* @apiName UserProfile
* @apiSuccess {Object} User The User information.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "user":"Object of User"
*     }
* @apiUse throwError
*/
// protect route with our Authentication, Our Token
// Profile Route
// protect route -> ,passport.authenticate('jwt',{session:false})
router.get('/profile',passport.authenticate('jwt',{session:false}),
(req, res,next) => {
  console.log('usuario: ',req.user)
  res.json({user:req.user});
});

/**
* @api {get} getUserById/ Get a user by his Id
* @apiDescription This route is used to retrieve a user by his Id.
* @apiGroup User
* @apiName GetUserById
* @apiSuccess {Object} User The User information.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "user":"Object of User"
*     }
* @apiUse throwError
*/
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

/**
* @api {get} getLatestUsers/ Get the latest user from the db.
* @apiDescription This route is used to retrieve the last five user who registered to the
* application.
* @apiGroup User
* @apiName GetLatestUser
* @apiSuccess {Object} User The last five User information.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "user":"Object of User"
*     }
* @apiUse throwError
*/
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

/**
* @api {get} getAllUsers/ Get all user from the db
* @apiDescription This route is used to retrieve all user in the db.
* @apiGroup User
* @apiName GetAllUsers
* @apiSuccess {Object} User All User information in the db.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "user":"Object of User"
*     }
* @apiUse throwError
*/
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
        res.json({success:false,msg:"No hay ningun archivo subido por este usuario",file:file});
      }else {
        console.log("Error al obtener Archvivos de usuarios de la base de datos");
        res.json({success:false,msg:"Error al obtener Archivos de usuarios de nuestro registro",file:file})
      }
  });
});

// EndPoit for the Role of the User
router.get('/getUserRoleById', (req, res) => {
    var id = req.query.id
    // convert the string to a Int
    console.log("User Id from users route Api " +id);
    // var idInt = parseInt(idStr)
    // console.log(idInt);
    User.getUserRole(id,(err,userRole) => {
      if (err){
        console.log("Hubo un error obteniendo el usuario por su rol ")
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
                res.json({data:false,msg:"El Rol de este usuario no fue encontrado por favor conectese nuevamente."})
              }
              // A role is found
              else {
                console.log("Se encontro un rol de administrador")
                res.json(adminRole)
              }

          })
      }
      // Get role of a regular user
      else {
        console.log("Se encontro un rol de usuario ", userRole + " end.")        
        res.json(userRole);
      }

    });
});

/**
 *
 * @api {get} /escuelas Get all the schools stored in the db with his professor
 * @apiName getSchoolsAndName
 * @apiGroup user
 * @apiVersion  0.0.1
 *
 * @apiSuccess (200) {type} name description
 *
 * @apiSuccessExample {type} Success-Response:
   {
       property : value
   }
 *
 */
router.get('/escuelas',(req,res)=> {
  var escuelas;
  // Get all the name of school that are in the Db.
  User.getAllEscuelas( (err,escuela)=>{
    if (err) {
      return res.json({succes:false,msg:"No se pudo completar la operacion", err:err,errMsg:err.errors.msg})
    }
    escuelas = escuela;
    console.log("Escuela parameter: "+ JSON.stringify(escuela, null, 4));
    // Get the names of the profesor of each school
    User.getUserByEscuela(escuela,(err,name)=>{
      console.log("Name Escuela parameter: "+ JSON.stringify(name, null, 4));
      var names = [];
      var schools = [];
      var numberOfFiles = [] ;
      var number;
      name = underscore.sortBy(name,'nombreEscuela');
      escuelas = underscore.sortBy(escuelas)
      underscore(name).each((elem,key) => {
          // console.log("elem: " + elem.name + " key " + key );
          names.push(elem.name);
          schools.push(elem.nombreEscuela);
          numberOfFiles.push(elem.file.length)                      
          console.log(schools[key] === schools[key - 1])
          console.log(schools[key - 1])
          console.log(schools[key])
          console.log("------")
          // if(schools[key] === schools[key - 1] ) {
          //   number += elem.file.length
          //   console.log("Number: " + number)
          // }else {
          //   numberOfFiles.push(number)            
          //   console.log("Son falso")
          //   number = 0
          // }
          
          
      });
      schools = underscore.countBy(schools);
      return res.json({success:true,msg:"Se encontro los nombre de escuelas ", schools:escuelas,professors:names,numberOfSchool:schools,files:numberOfFiles,data:name})
    });
  });
});

router.get('/getUserByEscuela/:escuela',(req,res)=> {
  var listOfFiles = [];
  User.getUserByEscuela(req.params.escuela,(err,name)=>{
    for (var index = 0; index < name.length; index++) {
      // listOfFiles.push(name[index].file + " - Nombre: " +  name[index].name)
      // listOfFiles.push(name[index].file + "")
      listOfFiles.push(name[index].file)      
      
    }
    console.log('list '+ listOfFiles [1])
    res.json({users:name,files:listOfFiles})
  });
    
});

router.get("/file",(req,res)=>{
  res.finishe
  console.log(__dirname)
   return res.download(__dirname + "/apidoc.json","userRoute.js",(err)=>{
     if(err){
        if (err.code == "ENOENT") {
          return res.json({succes:false,msg:"Error este archivo no fue encontrado en nuestro registro",err:err})
        }
        return res.json({err:err,succes:false,msg:"Hubo un error al descargar el archivo. Por favor intentenlo de nuevo. "})
     }else {
        
        console.log("true o false se envio el archivo: " + res.sendDate)
        // can't set header after the're sent
        // return res.json({succes:true,msg:"Archivos descargado exitosamente"})      
     }
   });
})

router.get("/Testupload",(req,res)=>{
  console.log("Header enviados ",res.headersSent)
  return res.sendFile(__filename,(error)=>{
    if (error){
      return res.json({succes:false,msg:"Error al subir el archivo. Codigo de error: " + error.code,err:error})
    }else {
      console.log("Headers enviados ",res.headersSent)
      if (! res.headersSent){
          return res.json({succes:false,msg:"El archivo no se ha enviado todavia"})
      }else {
        console.log("Archivos ya enviado")
      }
    }
  })
})


/**
 *
 * @api {get} /ping pong the server
 * @apiName pong
 * @apiGroup user
 * @apiVersion  0.0.1
 *
 *
 * @apiSuccess (200)
 *
 * @apiSuccessExample {type} Success-Response:
   {
        Pong
   }
 *
 *
 */
router.get('/ping', (req, res) => {
    return res.json('pong');
});


module.exports = router;
