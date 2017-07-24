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
export class AdministratorGuard implements CanActivate{
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
      //  restrict the acces for user and admin
      // if the user is Login check for the role of the user
      this.getRoleOfUser()
      this.detectLocalStorageChange();

       console.log(localStorage.getItem('role'),' role second');
      //  get the role of a user from local storage
       const role = localStorage.getItem('role')
       // user access
       if (role.localeCompare("1") == 0){
         console.log("El rol del usuario es 1 enviar ahora true");
         return true;
       }else if (role.localeCompare("2") == 0) {
         console.log("el rol es uno")
         // Show a error message
         this.flashMessage.show("Acces Unathorized",{cssClass:'alert-danger',timeout: 5000});
         window.history.back();
         return false;
       }

    }
    // Else user is not connected
    else {
      this.showMessageUserNotLoggedIn();
    }
  }

// Helper Method

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

  detectLocalStorageChange(){
    window.addEventListener("storage", function () {
       console.log("localstorage cambio");
       // Le doy redirect a una pagina 400 o a una pagina especial dicindole que ellos
       // no deben modificar el storage. Using below code
       // window.location.replace(Page Especial Url);
       this.location.reload();
     }, false);
  }

  showMessageUserNotLoggedIn(){
    // Unathorized Access
    // Show a error message
    this.flashMessage.show("Unathorized acces",{cssClass:'alert-danger',timeout: 5000});
    // redirect to the login page
    // redirect to login
    this.router.navigate(['/login']);
    return false;
  }

}
