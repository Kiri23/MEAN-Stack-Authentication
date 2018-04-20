'use strict'
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const Administrator = require('../models/administrator');
const config = require('./database');


module.exports = function(passport){
  let opts = {};
  // Token Send in Authentciation Header
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;

  passport.use(new JwtStrategy(opts,(jwt_payload,done) => {
    console.log("---------- \n payload down")
    console.log(jwt_payload);
    // por el momento solo funciona con usuarioa regulares. Tengo que hacer que tambien busque por administradores
    User.getUserById(jwt_payload._doc._id, (err,user) => {
      if (err){
        // para el express handler tengas este mensaje de error
        err.message += " -- .Ocurrio un error buscando el usuario por su ID para passport"
        return done(err,false);
      }
      if(user){
        return done(null,user);
      }if (!user){
        console.log("Buscando autenticidad con administrador. Passport.js config File node Backend")
        searchAdministrator(jwt_payload,done)
      }
      else {
        return done(null,false);
      }

    });
  }));

};

// Tengo que buscar en la base de administradores y ver si existen para poderlo autenticar. tengo que hacer el mismo procceso de arriba ver si hay errores y devolver falsos, ver si encontre un administradore y resolver o cualquier otra cosa enviar acceso unathorized(false)
function searchAdministrator(jwt_payload,done){
    Administrator.getAdministratorById(jwt_payload._doc._id,(err,administrator)=>{
      if (err){
        console.log("Error en passport.js config file funcion del administrador. Hubo un error autenticado el administrador me devolvio un error la llamada a la base de datos. error - " + err )
        err.message += " -- .Ocurrio un error buscando el administrador por su ID para passport"
        return done(err,false)
      }if (administrator){
        return done(null,administrator)
      }else{
        return done(null,false)
      }
    })
  
}
