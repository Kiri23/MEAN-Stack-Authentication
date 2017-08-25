'use strict'
//Modules
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// Third Party
import * as underscore from 'underscore'

/**
 * This class will contain all the Http request to the API to retrieve information about the user
 * @export
 * @class UsersService
 */
@Injectable()
export class UsersService {


  /**
   * Creates an instance of UsersService.
   * @param {Http} http 
   * 
   * @memberOf UsersService
   */
  constructor(private http:Http) { }

  /**
   * Retrieve a user from the db with his Id
   * @param {Number} id - The id of the user
   * @returns 
   * @memberOf UsersService
   */
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

  getUserByEscuela(escuela){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/getUserByEscuela/'+escuela,{headers:headers}).map(res =>
      res.json());
  }

  /**
   * Get the last five (5) user registered to the app. 
   * @returns 
   * @memberOf UsersService
   */
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

  /**
   * Return all the users from the db
   * @returns 
   * @memberOf UsersService
   */
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

  /**
   * Send email to user email to reset the password 
   * @param {string} email - The email of the user to recover password.   
   * @returns 
   * @memberOf UsersService
   */
  //Send email to user to restore the password
  sendForgotEmail(email){
    console.log('user service forgot email')
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.post('/users/forgot?email='+email,{headers:headers}).map(res =>
      res.json());
  }

  /**
   * Restore User Password
   * @param {string} password - The new password to set.   
   * @param {string} token - The token to restore password.   
   * @returns 
   * @memberOf UsersService
   */
  //Restore user password
  resetPassword(password,token){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.post('/users/reset/'+ token,{headers:headers,password}).map(res =>
      res.json());
  }

  /**
   * This function skip user in the db. 
   * @param {Number} number - The number of users to skip.
   * @returns 
   * @memberOf UsersService
   */
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

  /**
   * Get a file by the name of the file
   * @param {String} fileName - The name of the file to retrieve
   * @returns 
   * @memberOf UsersService
   */
  // Get a file store in db by his name
  getFile(fileName:String){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');
    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
    return this.http.get('/file/'+fileName,{headers:headers});
  }

  /**
   * Retrieve the latest file of a user
   * @returns 
   * @memberOf UsersService
   */
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

  /**
   * Retrieves all the files of a user by the user Id 
   * @param {any} userId - The Id of the user
   * @returns 
   * 
   * @memberOf UsersService
   */
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

  /**
   * Get a role of a user by his Id
   * @param {any} id - The id of the user to get the role
   * @returns 
   * 
   * @memberOf UsersService
   */
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

  /**
   * Retrieves all the School that are in the DB with the profesor of each schools
   * @returns 
   * @memberOf UsersService
   */
  getAllSchoolAndProfessor(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');

    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/users/escuelas',{headers:headers}).map(res => {
      // This is how can I send only the _id or the role in this method
      // console.log(res.json()[0]._id," reuktado from the call");
      return res.json();
    });
  }

  getNumberOfFilesBySchools(){
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type','application/json');

    // return an observable with the response
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.get('/getAllArchivosEscuela',{headers:headers}).map(res => {
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
