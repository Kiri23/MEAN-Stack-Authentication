//Modules
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// services
import {AuthService} from '../../services/auth.service';
// 3rd parthy
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // como tenemos ngModel por eso podemos acesar la proiwdad de username y password. it has to be the same name tha it's om the form para poder accesar el value del form
  username:String;
  password:String;

  constructor(private authService:AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  // Esta funcion es llamada cuando el form es submit it.
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
    console.log(this.password);
    //Auth service Make http call to Login user
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        // authenticate user with the token
        this.authService.storeUserData(data.token,data.user.id);
        // show message login
        this.flashMessage.show("You are now logged in",{cssClass:'alert-success',timeout: 5000});
        this.router.navigate(['/dashboard'])
      }else{ // if user can't log in.
        //data.msg contains user not found or wrong password
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout: 5000});
        this.router.navigate(['/login'])
      }
    });

  }

}
