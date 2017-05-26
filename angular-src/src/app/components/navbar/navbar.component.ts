//Modules
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// services
import {AuthService} from '../../services/auth.service';
// 3rd parthy
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // inject the module and service to the constructor
  constructor(private authService:AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService) {}

  ngOnInit() {
  }

  // click event on log out
  onLogoutClick(){
    // como esto es un metodo podemos hacerlo asi. pq no es un observable
    // this just set the variable to null and clear the local storage
    this.authService.logout();
    // show logout message
    this.flashMessage.show("You are logged out"
      ,{cssClass:'alert-success',timeout:4000}
    );
    // redirect to login
    this.router.navigate(['/login']);
    return false
  }


}
