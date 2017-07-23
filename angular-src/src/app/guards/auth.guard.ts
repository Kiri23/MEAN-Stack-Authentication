// Module
import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Http,Headers} from '@angular/http';

// Service
import {AuthService} from '../services/auth.service';
import {UsersService} from '../services/users.service';

// 3rd Pathy
import {FlashMessagesService} from 'angular2-flash-messages';


@Injectable()
export class AuthGuard implements CanActivate{
  userRole;
  ss:any;
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private userService:UsersService,
    private http:Http
  ){
    // this.getRole()
   }

  // Protect Route with lowercase c. to restrict whatever page you nedd to extend the CanActivate interface and include the canActivate function. inside the function you put whatever logic you want and return true or false to Authorized access.
   canActivate(){
    if (this.authService.checkLoggedIn()){
      console.log("Hello Role");
      // if the user is Login check for the role of the user
      this.getRoleOfUser()
      // setTimeout to wait and load the role. I do this to restrict that a user cant change the local storage
      // setTimeout(function(){
       console.log(localStorage.getItem('role'),' role second');
       const role = localStorage.getItem('role')

       window.addEventListener("storage", function () {
          // do your checks to detect
          // changes in "e1", "e2" & "e3" here
          console.log("localstorage cambio");
          // Le doy redirect a una pagina 400 o a una pagina especial dicindole que ellos
          // no deben modificar el storage. Using below code
          // window.location.replace(Page Especial Url);
          this.location.reload();
        }, false);
       // user access
       if (role.localeCompare("2") == 0){
         console.log("El rol del usuario es 2 enviar ahora falso");
         return true;
       }else if (role.localeCompare("1") == 0) {
         console.log("el rol es uno")
         return false;
       }

    //  }, 1550);

     // set another timeout wait one and half second to make the condition and then delete the item in the localstorage
    //  setTimeout(function(){
    //    localStorage.removeItem('role');
    //    console.log("deleted. third");
    // }, 1550);

      //Authorized acces
      // console.log("first");
      // return true

    }else {
      // Unathorized Access
      // Show a error message
      this.flashMessage.show("Unathorized acces",{cssClass:'alert-danger',timeout: 5000});
      // redirect to the login page
      // redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }

  getRoleOfUser(){
    const userId = localStorage.getItem('user')
    var id;
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

  async getRole(){
    console.log("se esta llamando la funcion");
     this.userRole = await this.userService.sayHello();
     console.log(this.userRole);
     console.log(this.userRole,"3. Im only going to run after getRole is Finished");
  }

}
