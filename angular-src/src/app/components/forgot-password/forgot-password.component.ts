import { Component, OnInit } from '@angular/core';
// Services 
import {UsersService} from '../../services/users.service';
// external modules 
import {FlashMessagesService} from 'angular2-flash-messages';
  


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:String;
  
  constructor(private usersService:UsersService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  sendEmail(){
    console.log('Forgot Password : '+ this.email)
    this.usersService.sendForgotEmail(this.email).subscribe(data=> {
      if (data.success === 'undefined'){
        console.log(' data succes data succes nullo')        
        return
      }
      if (data.success){
        if (data.msg === 'undefined'){
          console.log('Forgot password data msg nullo')
          return;
        }else {
          this.flashMessage.show(data.msg,{cssClass: 'alert-success',timeout: 6000});
        }
        
      }else if (! data.success){
        this.flashMessage.show(data.msg,{cssClass: 'alert-danger',timeout: 6000});
        
      }else {
        this.flashMessage.show("Un error inesperado ocurrio enviando el email para recuperar la contrasena",{cssClass: 'alert-danger',timeout: 6000});        
      }
    });
  }

} 
