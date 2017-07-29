'use strict'
//Modules
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// Third Party
import * as underscore from 'underscore'

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  // getUserById
  getUserById(id:Number){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getUserById?userId='+id,{headers:headers}).map(res =>
      res.json());
  }

  //Get all users
  getLatestUsers(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getLatestUsers',{headers:headers}).map(res =>
      res.json());
  }

  //Get all users
  getAllUsers(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getAllUsers',{headers:headers}).map(res =>
      res.json());
  }

  //Get all users
  skipUsers(number:Number){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/skipUsers?skipNumber='+number,{headers:headers}).map(res =>
      res.json());
  }

  // Get a file store in db by his name
  getFile(fileName:String){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
    return this.http.get('/file/'+fileName,{headers:headers});
  }

  getLatestFile(){
    console.log("llamada al metodo getlatesfile");
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
    return this.http.get('/getLatestfile',{headers:headers}).map(res =>
      res.json()
    );
  }

  getFilesUploaded(userId){
    console.log("llamada al metodo getFileUploaded - users.service" + "\n userId:" + userId);
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
    return this.http.get('users/getFilesUploaded?userId='+userId,{headers:headers}).map(res =>
      // ya aqui en el serve side ya se ha hecho la validacion si es nullo, undefined, vacio
      res.json()
    );
  }

  // Get the role of the user
  getRoleOfUser(id){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');

    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getUserRoleById?id='+id,{headers:headers}).map(res => {
      // This is how can I send only the _id or the role in this method
      // console.log(res.json()[0]._id," reuktado from the call");
      return res.json();
    });
  }
  // getRole():string
 async getRole(){
    console.log("se esta llamando la funcion getRole htps");
    var role;
    console.log("se esta esperando pq la llamada termine");
    // si el ping.subscirbe no es un promise alomejor no va afuncionar debidamente
     await this.ping().subscribe(user => {
      role = user;
       // no se puede enviar la infomacion aqui adentro pq la devuelve nulla
    })

    console.log(" ya se completo la llamada http se supone que yo me llame despues ");

    setTimeout(function (){
      console.log(role, ' from getrole');
      return role
    },500)
    return role;

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

 sayHello(){
   console.log(" me estan llamando h");
   return new Promise((resolve,reject) => {
    //  setTimeout(() => {
    //    resolve(this.getRole())
    //  },3000)

   });
 }


}
