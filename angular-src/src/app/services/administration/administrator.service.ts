'use strict'
//Modules
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdministratorsService {

  constructor(private http:Http) { }

  // getAdministratorById
  getAdministratorById(id){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/administrators/getAdministratorById?AdministratorId='+id,{headers:headers}).map(res =>
      res.json());
  }

  //Get all administrator
  getLatestAdministrators(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/administrator/getLatestAdministrators',{headers:headers}).map(res =>
      res.json());
  }

  //Get all administrator
  getAllAdministrators(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/administrator/getAllAdministrators',{headers:headers}).map(res =>
      res.json());
  }

  //Get all administrator
  skipAdministrators(number){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/administrator/skipAdministrators?skipNumber='+number,{headers:headers}).map(res =>
      res.json());
  }

  getRoleOfAdministrator(){
    
  }

  // getAdministratorById
  ping(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/administrator/ping?',{headers:headers}).map(res =>
      res.json());
  }


}
