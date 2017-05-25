import { Component, OnInit } from '@angular/core';
// Service for validate blank(empty) form and email
import {ValidateService} from '../../services/validate.service';
// external module 3rd party
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  error = ""

  //anytime we use a service we need to inject to a constructor
  // so we can this.validateService
  constructor(private validateService:ValidateService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log(this.name,this.username,this.email)
    const user = {
      name: this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
      this.flashMessage.show("Please fill in all fields",{cssClass: 'alert-danger',timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
      this.flashMessage.show("Please use a valid email",{cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
  }

}
