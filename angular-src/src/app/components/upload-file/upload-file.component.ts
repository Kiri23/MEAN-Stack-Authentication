import { Component, OnInit } from '@angular/core';
//import the file uploader plugin
import {FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
// modules
import {FlashMessagesService} from 'angular2-flash-messages';
import * as underscore from 'underscore';


  const userId = localStorage.getItem('user');

  const URL = "administrator/upload";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  rows = [{name: 'Chris Daly'}];
  name = "";
  listOfFileNames;


//declare a property called fileuploader and assign it to an instance of a new fileUploader.
//pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'file',
                               additionalParameter:{["name"]:"christian"}
});


  constructor(private userService:UsersService,private flashMessage:FlashMessagesService, private authService:AuthService) { }

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onBeforeUploadItem = () => {
      console.log("before");
    }
    console.log(this.uploader.options.additionalParameter["name"]);

    // this.uploader.options.removeAfterUpload = true;
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false;
    };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:",response)
    };


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
        this.flashMessage.show("Error mostrando los archivos que se subieron",{cssClass:'alert-danger',timeout: 5000});
        // redirect to the login page
        return false;

    });





  }


  addRow() {
    console.log("filename: " +this.listOfFileNames[0].name);
    console.log("filename length " + this.listOfFileNames.length);
    if (this.rows.length <=4){
      this.rows.push({name: this.name});
      this.name = '';
    }
  }

  uploadAll(){
    console.log("llamada a uploadAll");
    console.log("lenght not uploaded item: " + this.uploader.getNotUploadedItems().length);

    var uploadFile;
    if (this.listOfFileNames.length >=4){
      var lengthOfList = this.listOfFileNames.length;
      // this will match the last hyphen [^-]*[^ -]$
      // this will match the first hyphen ^[^-]*[^ -]
      // regex expresion will retrieve everything before the last "-" hyphen que va
      // a ser el que yo le pongo en el server
      var lastFile = this.listOfFileNames[lengthOfList -1].name.match(/^[^-]*[^-]/g);
      // matche everything before a -
      var filetoUpload = this.uploader.queue.concat()[0]._file.name.match(/^[^-]*[^ -]/g);
      // console.log("file tp" + filetoUpload);
      uploadFile = window.confirm("El archivo: \"" + lastFile + "\" sera remplazado con el archivo \""  + filetoUpload + "\" " );
    }

    if (uploadFile == true || this.listOfFileNames.length <=4){
      console.log("uplaod file es true");
      this.uploader.uploadAll();

    }else if (uploadFile == false){
      window.alert("La subida del archivo fue cancelada");
    }else{
      window.alert("Un error ocurrio al subir el archivo")
    }
  }

}
