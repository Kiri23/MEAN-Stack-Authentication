import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // validate for blank fields
  validateRegister(user){
    const expresion = user.name  == undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.nombreEscuela == undefined;
    if(expresion){
      // console.log("Registeration services register")
      return false;
    }else {
      return true;
    }
  }

  // validate email
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regex bolean expresion
    return re.test(email);
  }

}
