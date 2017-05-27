// Module
import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
// Service
import {AuthService} from '../services/auth.service';
// 3rd Pathy
import {FlashMessagesService} from 'angular2-flash-messages';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ){ }

  // Protect Route with lowercase c
  canActivate(){
    if (this.authService.checkLoggedIn()){
      //Authorized acces
      return true;
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

}
