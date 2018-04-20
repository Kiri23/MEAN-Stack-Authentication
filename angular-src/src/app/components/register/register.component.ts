// Modules
import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
// Service for validate blank(empty) form and email
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
// external module 3rd party
import {FlashMessagesService} from 'angular2-flash-messages';
import { error } from 'util';

// Acces to external Method in window
declare var LogRocket:any;


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
  escuela: String;
  // role;

  @Input() text = "Regístrate";
  @Input() role = 2;

  //anytime we use a service we need to inject to a constructor and module also need to be injected
  // so we can this.validateService
  constructor(private validateService:ValidateService,private flashMessage:FlashMessagesService,private authService:AuthService,private router:Router) { }

  ngOnInit() {
    // role of administrator
    // cambiar esto
    console.log('role es ',this.role);
  }

  cho(){
   console.log("hhelo baby"); 
  }
  onRegisterSubmit(){
    // Aqui tengo que mandar el rol del usuario pa asegurar quien lo creo y que rol tiene este
    // usuario nuevo
    const user = {
      name: this.name,
      email:this.email,
      username:this.username,
      password:this.password,
      role:this.role,
      CreatedDate:new Date(),
      file:[],
      nombreEscuela: this.escuela.toString().toLowerCase()
    }
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      // tslint:disable-next-line:max-line-length
      // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
      this.flashMessage.show("Porfavor llena todo los encasillados antes de crear la cuenta.",{cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      // tslint:disable-next-line:max-line-length
      // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
      this.flashMessage.show("Porfavor utiliza una direccion de correo electronico valida o completa",{cssClass: 'alert-danger',timeout: 3000});
      return false;
    }
    // register user. since it's an observable we need to subcribe to it.
    this.authService.registerUser(user).subscribe(data=> {
      console.log(data);
      // callback with the data(aka json)
      // data.succes I refer to this as the json come with the respond. if user register
      if(data.success){
        // show a message
        this.flashMessage.show("Ahora estas registrado y puedes conectarte!",{cssClass: 'alert-success',timeout: 3000});
        if (LogRocket){
        LogRocket.track('Register User');
        }

        // Redirect to login
        this.router.navigate(['/login'])
      }else{ // user can not be register
        // show a message. sugestion maye in the json can be a error message
        this.flashMessage.show("Error: " + data.msg || data.error.errors.nombreEscuela.message,{cssClass: 'alert-danger',timeout: 10000});
        // Redirect to login
        // this.router.navigate(['/register'])
      }
    });
    // console.log(this.name,this.username,this.email, "role: ",this.role + " escuela: " + this.escuela.toString().toLowerCase());

    //  data.error.errors.file.message - mostrar el mensajes de error de excdeio file archivos
  }

}
