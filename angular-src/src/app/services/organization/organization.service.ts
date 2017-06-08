'use strict'
//Modules
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrganizationsService {

  constructor(private http:Http) { }

  // getOrganizationById
  getOrganizationById(id){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/organization/getOrganizationById?OrganizationId='+id,{headers:headers}).map(res =>
      res.json());
  }

  //Get all organization
  getLatestOrganizations(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/organization/getLatestOrganizations',{headers:headers}).map(res =>
      res.json());
  }

  //Get all organization
  getAllOrganizations(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/organization/getAllOrganizations',{headers:headers}).map(res =>
      res.json());
  }

  //Get all organization
  skipOrganizations(number){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/organization/skipOrganizations?skipNumber='+number,{headers:headers}).map(res =>
      res.json());
  }

  getRoleOfOrganization(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/organization/skipOrganizations?skipNumber=',{headers:headers}).map(res =>
      res.json());
  }

  // getOrganizationById
  ping(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/organization/ping?',{headers:headers}).map(res =>
      res.json());
  }


}
