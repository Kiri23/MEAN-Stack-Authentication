// Module
import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Http,Headers} from '@angular/http';

// Service
import {AuthService} from '../services/auth.service';
import {UsersService} from '../services/users.service';


// 3rd Pathy
import { FlashMessagesService } from "angular2-flash-messages/module";



@Injectable()
export class AuthGuard implements CanActivate{
  userRole;
  ss12:any;
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private userService:UsersService,
    private http:Http
  ){
    // this.getRole()
   }

   /**
    * Auth Guard canActivate Method
    * @memberOf AuthGuard
    * @returns {Boolean} True if you have acces. False if you dont have acces to this * route    
    */
  // Protect Route with lowercase c. to restrict whatever page you nedd to extend the CanActivate interface and include the canActivate function. inside the function you put whatever logic you want and return true or false to Authorized access    
   canActivate(){
    if (this.authService.checkLoggedIn()){
      // console.log("role from authservice: " + this.authService.userRole);
      //  restrict the acces for user and admin
      // if the user is Login check for the role of the user
      this.getRoleOfUser()
      this.detectLocalStorageChange();

       console.log(localStorage.getItem('role'),' role second');
      //  get the role of a user from local storage
       const role = localStorage.getItem('role')
       // user access
       if (role.localeCompare("2") == 0){
         console.log("El rol del usuario es 2 enviar ahora falso");
         return true;
       }else if (role.localeCompare("1") == 0) {
         console.log("el rol es uno")
         // Show a error message
         this.flashMessage.show("Acces Unathorized",{cssClass:'alert-danger',timeout: 5000});
        //  Wait half and second then set it back to the page they last visited
        //  setTimeout(function(){
        //    window.history.back();
        //  }, 2500);

         return false;
       }

    }
    // Else user is not connected
    else {
      this.showMessageUserNotLoggedIn();
    }
  }

  /**
   * Helper Function to get the role of a user. This function use the userId store in local storage to retrieve the role of a user
   * @throws show an error message if can't get the role of the user
   * @memberOf AuthGuard
   */
  // Helper Method
  getRoleOfUser(){
    /**
     * The id of the user 
     * @type {string} 
     * @readonly 
     */
    const userId = localStorage.getItem('user')
    // var id;
    // make an http call to the API
    this.userService.getRoleOfUser(userId).subscribe(user => {
      // user send with the response
      localStorage.setItem('role',user[0].role);
    },
    err => {
      // observable can also return error
      console.log(err);
      // Show a error message
      this.flashMessage.show("An error has ocurred retrieving the role",{cssClass:'alert-danger',timeout: 5000});
      // redirect to the login page
      this.router.navigate(['/login']);
      return false;
    });

  }

  /**
   * @summary Function to detect if someone try to change the local Storage
   *  
   * @desc I use this function to verify if someone try to change his role, if someone do that I redirect to the last page they were using ``` window.location.reload()```
   *
   * @memberOf AuthGuard
   */
  detectLocalStorageChange(){
    window.addEventListener("storage", function () {
       console.log("localstorage cambio");
       // Le doy redirect a una pagina 400 o a una pagina especial dicindole que ellos
       // no deben modificar el storage. Using below code
       // window.location.replace(Page Especial Url);
       this.location.reload();
     }, false);
  }

  /**
   * Show a message that the user is not logged in using the flashMessage Module
   * @see {@link https://github.com/moff/angular2-flash-messages }
   * @memberOf AuthGuard
   */
  showMessageUserNotLoggedIn(){
    // Unathorized Access
    // Show a error message
    this.flashMessage.show("Unathorized acces. Not login session found. ",{cssClass:'alert-danger',timeout: 5000});
    // redirect to the login page
    // redirect to login
    this.router.navigate(['/login']);
    return false;
  }

}

