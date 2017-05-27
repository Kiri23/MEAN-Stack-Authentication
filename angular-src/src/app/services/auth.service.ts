'use strict'
//Modules
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//Third party Module
import {tokenNotExpired} from 'angular2-jwt';

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

  // Make Http Call to Login user
  authenticateUser(user){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // observable make the http call to authenticate user
    // This is going to send the succes message and the authenticate Token
    return this.http.post('http://localhost:3002/users/authenticate',user,{headers:headers}).map(res => res.json());
  }

  // authenticater user login with the token
  storeUserData(token,user){
    // when using jwt-token it look for this key exactly id_token. saving token to local storage
    localStorage.setItem('id_token',token)
    // save to local storage user. we need to store as a string because it cant store object. when we need it back we parse it back to json
    localStorage.setItem('user',JSON.stringify(user))
    // set values to the variable
    this.authToken = token;
    this.user = user;
  }

  logout(){
    // set variables to null
    this.authToken = null;
    this.user = null;
    // clear local storage
    localStorage.clear()
  }

  // Get Profile
  getProfile(){
    let headers = new Headers();
    //set the Content-Type to application/json
    // with this now we have acces to the token.
    this.loadToken()
    // append the token to the header
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    // this get request send the token and user info in a json response
    return this.http.get('http://localhost:3002/users/profile',{headers:headers}).map(res => res.json());
  }

  loadToken(){
    // Load token from local storage
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // check if there's a user sing in
  checkLoggedIn(){
    return tokenNotExpired('id_token');
  }

}
