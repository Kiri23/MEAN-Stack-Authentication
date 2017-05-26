'use strict'
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken:any;
  user:any;
  // inject the http module into the constructor. like the service
  constructor(private http:Http) { }

  // this always is going to be a user object because i do the validation in the register view
  // this is the post to register a new user
  registerUser(user){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.post('http://localhost:3002/users/register',user,{headers:headers}).map(res => res.json());
  }


}
