import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'
import {AuthService} from '../../services/auth.service';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';
import * as underscore from 'underscore';


/**
 * This Componet will show the user profile.
 * @class ProfileComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /**
   * user object that contain the user information
   * @member {Object} User Contain the user information  */  
  user:Object;
  /**
   * The file to download
   * @member {String} file  */  
  fileLink:string;
  /**
   * The link of the file to download need to pass to a security class in angular 2. 
   * @see {@link https://angular.io/guide/security#bypass-security-apis }
   * @member {SafeUrl} file  
   */  
  safeFileLink:SafeUrl;
  /**
   * The url that link to download the file
   * @type {string}
   * @memberOf ProfileComponent
   */
  fileUrl:string;
  /**
   * Flag to verify is the file is downloading
   * @type {boolean}
   * @memberOf ProfileComponent
   */
  isDownloading:boolean = true;
  /**
   * The file names to downloads provided with the administrator
   * @memberOf ProfileComponent
   */
  listOfFileNames;

  /**
   * Creates an instance of ProfileComponent.
   * @param {AuthService} authService 
   * @param {Router} router 
   * @param {FlashMessagesService} flashMessage 
   * @param {UsersService} userService 
   * @param {DomSanitizer} sanitizer 
   * 
   * @memberOf ProfileComponent
   */
  // Inject the service into the constructor
  constructor(private authService:AuthService,private router:Router, private flashMessage:FlashMessagesService,private userService:UsersService,private sanitizer: DomSanitizer) {

  }

  /**
   * Initialize component. This method get call when the component is render for the first time
   * @memberOf ProfileComponent
   */
  ngOnInit() {
      this.getProfile();
      this.getFileByName("Christian Nogueras Rosado Resume v3-July 25, 2017, 11:41:53 AM.docx");
      this.getListOfFileNames();
  }


  /**
   * Get profile of the user.
   * @return {Object} User The user information
   * @throws error Show an error message of the operation
   * @memberOf ProfileComponent
   */
  getProfile(){
    // get request to users/profile to authenticate user with a token.
    this.authService.getProfile().subscribe(profile => {
      // user send with the response
      console.log("este es profile",profile)
      if (profile.user){
        /** 
         * El usuario obtenido de la llamada Http 
         * @type {Object}*/
        this.user = profile.user;
      }else {
        // Show a error message
        this.flashMessage.show("Error obteniendo informacion del usuario" + " - code ang",{cssClass:'alert-danger',timeout: 30000});// 30 segundos
      }
      if (this.user){
        console.log("Se debe mostrar")
      }
    },
    err => {
      // observable can also return error
      console.log(err);
      console.log('aqui succed erro???!!!!! en profile component angular')
      // Show a error message
      this.flashMessage.show("Error. Verifique que usted tenga conexion a internet. Contacte un representates de OPAS si el problema persiste y muestrele este error. Extra informacion: No se pudo comunicar con el servidor express. Tuvo que haber ocurrido un error con la aplicacion Node. Este es el error:  "+ err.msg + " - code ang",{cssClass:'alert-danger',timeout: 50000});
      // redirect to the login page
      this.router.navigate(['/dashboard']);
      return false;

    });
  }

  /**
   * Retrieve a file from the db with his name.
   * @param {String} filename the name of the file to retrieve
   * @memberOf ProfileComponent
   */
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

  /**
   * Funcion para obtener los archivos que el usuario tiene que descargar. Estos archivos son proveidos por los templates que suba el administrador
   * @memberOf ProfileComponent
   */
  getListOfFileNames(){
    this.userService.getLatestFile().subscribe(file => {
      if ( ! underscore.isEmpty(file) &&
          ! underscore.isNull(file) &&
          ! underscore.isUndefined(file)) {
           // user send with the response
           this.listOfFileNames = file;
      }else {
        this.listOfFileNames = [{name:"No file to show"}];
      }
      console.log("file object is " + file);
      console.log("length of file " + file.length);
      },
      err => {
        // observable can also return error
        console.log(err);
        // Show a error message
        this.flashMessage.show("Error mostrando los archivos para descargar",{cssClass:'alert-danger',timeout: 5000});
        // redirect to the login page
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
