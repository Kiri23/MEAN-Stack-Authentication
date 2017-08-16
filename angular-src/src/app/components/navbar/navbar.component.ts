//Modules
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// services
import {AuthService} from '../../services/auth.service';
import {UsersService} from '../../services/users.service';
// 3rd parthy
import {FlashMessagesService} from 'angular2-flash-messages';

declare var LogRocket:any;

// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

LogRocket.getSessionURL(function (sessionURL) {
  console.log(sessionURL);
});

LogRocket.track('Register User');

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole:Number;
  // inject the module and service to the constructor
  constructor(private authService:AuthService,
              private userService:UsersService,
              private router:Router,
              private flashMessage:FlashMessagesService) {}

  ngOnInit() {
    // if the user is logged In retrieve the role of the user
    if (this.authService.checkLoggedIn()){
        console.log("User is Logge In from Navbar");
        // Retrieve the user role.
        this.getRoleOfUser();
    }

  }

  // click event on log out
  onLogoutClick(){
    // como esto es un metodo podemos hacerlo asi. pq no es un observable
    // this just set the variable to null and clear the local storage
    this.authService.logout();
    // show logout message
    this.flashMessage.show("Has sido desconectado correctamente!"
      ,{cssClass:'alert-success',timeout:4000}
    );
    // redirect to login
    this.router.navigate(['/login']);

    // if I want to reload the page when the user logge out. I wan this because the navbar item
    // doesnt get removed when a new person logged in.
    // setTimeout(function(){
    //   window.location.reload();
    // },10)
    return false
  }

  isAdminRole(){
    // if User Role is administrator(Aka 1) sent true otherwise sent false
    // console.log("User Role from NavBar: " + this.userRole);
    return this.userRole == 1 ? true:false;
  }


  getRoleOfUser(){
    // Ge the Id of the user.
    const userId = localStorage.getItem('user')
    // make an http call to the API
    this.userService.getRoleOfUser(userId).subscribe(user => {
      // user send with the response
      this.userRole = user[0].role;
      // console.log("Nav Bar Role: " + this.userRole);

    },
    err => {
      // observable can also return error
      console.log(err);
      // Show a error message
      this.flashMessage.show("Un error ocurrió determinando su rol",{cssClass:'alert-danger',timeout: 5000});
      // redirect to the login page
      this.router.navigate(['/login']);
    });
  }

}
