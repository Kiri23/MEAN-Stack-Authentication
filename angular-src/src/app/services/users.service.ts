'use strict'
//Modules
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  // getUserById
  getUserById(id){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getUserById?userId='+id,{headers:headers}).map(res =>
      res.json());
  }

  //Get all users
  getUsers(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getUsers',{headers:headers}).map(res =>
      res.json());
  }

  // getUserById
  ping(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/ping?',{headers:headers}).map(res =>
      res.json());
  }


}
