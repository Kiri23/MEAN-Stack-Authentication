import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable()
export class PaypalService {

  constructor(private http:Http) { }
    /**
   * Retrieve a user from the db with his Id
   * @param {Number} id - The id of the user
   * @returns 
   * @memberOf UsersService
   */
  // getUserById
  createPayment() {
    let headers = new Headers();
    //set the Content-Type to application/json
    headers.append('Content-Type', 'application/json');
    // return an observable with the response
    // tslint:disable-next-line:max-line-length
    // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
    return this.http.post('/pay', { headers: headers }).map(
      res => res.json()
    );
  }

}
