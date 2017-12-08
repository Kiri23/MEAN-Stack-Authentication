'use strict'
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('./database');

module.exports = function(passport){
  let opts = {};
  // Token Send in Authentciation Header
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;


  // passport.use(new JwtStrategy(opts,(jwt_payload,done) => {
  //   console.log(jwt_payload);
  //   User.getUserById(jwt_payload._doc._id, (err,user) => {
  //     if (err){
  //       return done(err,false);
  //     }
  //     if(user){
  //       return done(null,user);
  //     }else {
  //       return done(null,false);
  //     }

  //   });
  // }))};





  passport.use(new JwtStrategy(opts,(jwt_payload,done) => {
    console.log("esto es lo que se llama proviene de passport.js en config",jwt_payload);
    User.getUserById(jwt_payload._doc._id, (err,user) => {
      if (err){
        console.log("error en config passport.js")
        return done(err,false);
      }
      if(user){
        return done(null,user);
      }else {
        console.log("error sjsjs")
        return done(null,false);
      }

    });
  }),(err,req,res,next)=>{ // error de passport.use
      // This override the custom error handler and pass the error to the exores errro handler for showing the error to the client
      // If there is ever an error with passport strategy and the express error handling message is not clear you can remove this handler and let the node.js erro handler tell you what is wrong. Is going to be a differente message.Pasa que el express error handler notifica el usuario.El node.js error handling notifica al programa y lo imprime en consola, lo cual no lo manda a la web.
      console.log("se llamao la otra funcion de passport use en passport.js config")
    if (err){
      console.log("Hubo un error en passport use method de config folder")
      throw err
    }
  });

};
