import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  // Inject the service into the constructor
  constructor(private authService:AuthService,private router:Router, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
      // get request to users/profile to authenticate user with a token.
      this.authService.getProfile().subscribe(profile => {
        // user send with the response
        this.user = profile.user;
      },
      err => {
        // observable can also return error
        console.log(err);
        // Show a error message
        this.flashMessage.show("Unathorized acces",{cssClass:'alert-danger',timeout: 5000});
        // redirect to the login page
        this.router.navigate(['/login']);
        return false;

      });
  }





}
