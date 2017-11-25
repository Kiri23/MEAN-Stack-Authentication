import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
// Services 
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
// external modules 
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({ 
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password:String;
  // token = "453bc3b66146c23fecd2055f0d022efe3a910ae0"
  token = 'No token'
  constructor(private usersService:UsersService,private flashMessage:FlashMessagesService,private router:Router,private route: ActivatedRoute,private authService:AuthService) { }
  
  ngOnInit() {
     this.token = this.route.snapshot.queryParams["token"];
    console.log('token param '+ this.token )    
  }

  resetPassword(){
    // 453bc3b66146c23fecd2055f0d022efe3a910ae0
    console.log('pass'+ this.password)
    this.usersService.resetPassword(this.password,this.token).subscribe(data=> {
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
          this.router.navigate(['/login'])          
        }
        
      }else if (! data.success){
        this.flashMessage.show(data.msg,{cssClass: 'alert-danger',timeout: 8000});
        
      }else {
        this.flashMessage.show("Un error inesperado ocurrio para cambiar la contrasena",{cssClass: 'alert-danger',timeout: 6000});        
      }
    });      

  }
}
