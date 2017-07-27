import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'
import {AuthService} from '../../services/auth.service';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  fileLink:string;
  safeFileLink:SafeUrl;
  fileUrl:string;
  isDownloading:boolean = true;
  // Inject the service into the constructor
  constructor(private authService:AuthService,private router:Router, private flashMessage:FlashMessagesService,private userService:UsersService,private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
      this.getProfile();
      this.getFileByName("Christian Nogueras Rosado Resume v3-July 25, 2017, 11:41:53 AM.docx");
  }

  getProfile(){
    // get request to users/profile to authenticate user with a token.
    this.authService.getProfile().subscribe(profile => {
      // user send with the response
      this.user = profile.user;
    },
    err => {
      // observable can also return error
      console.log(err);
      // Show a error message
      this.flashMessage.show("Error retrieving the profile",{cssClass:'alert-danger',timeout: 5000});
      // redirect to the login page
      this.router.navigate(['/login']);
      return false;

    });
  }

  getFileByName(filename:String){
    // get request to users/profile to authenticate user with a token.
    this.userService.getFile(filename).subscribe(file => {
      // user send with the response
      this.fileLink = file.toString();
      this.fileLink = this.fileLink.split("http://")[this.fileLink.split("http://").length -1];
      this.safeFileLink = this.sanitizer.bypassSecurityTrustUrl(this.fileLink);
      this.fileUrl = "http://"+this.fileLink;
      console.log("file url from method:" + this.fileLink);
      console.log("Response from server: " + file);
      console.log("Safe Link Url: " + this.safeFileLink);
      this.isDownloading = false;
    },
    err => {
      // observable can also return error
      console.log(err);
      // Show a error message
      this.flashMessage.show("Error retrieving the file",{cssClass:'alert-danger',timeout: 5000});
      // redirect to the login page
      // this.router.navigate(['/login']);
      return false;
    });
  }

  downloadLink(){
    // alert("hello")
    // window.setTimeout(function(){
    //   alert("Hello downloading file")
    //   // window.location.replace(this.safeFileLink);
    // },2000)
  }

}
