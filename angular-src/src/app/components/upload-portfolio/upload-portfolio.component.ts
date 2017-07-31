import { Component, OnInit } from '@angular/core';
// services
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';

// modules
import {FlashMessagesService} from 'angular2-flash-messages';
import {FileUploader } from 'ng2-file-upload/ng2-file-upload';

// Third Party Libraries
import * as underscore from 'underscore'

const userId = localStorage.getItem('user');
const URL = "users/upload?userId="+userId;


@Component({
  selector: 'app-upload-portfolio',
  templateUrl: './upload-portfolio.component.html',
  styleUrls: ['./upload-portfolio.component.css']
})
export class UploadPortfolioComponent implements OnInit {
  files;
  filesUploaded;

  //declare a property called fileuploader and assign it to an instance of a new fileUploader.
  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'file',
                                 additionalParameter:{["name"]:"christian"}
  });

  constructor(private userService:UsersService,private flashMessage:FlashMessagesService,
              private authService:AuthService
  ) { }

  ngOnInit() {
    console.log("Upload Component Initializar");
    if (this.authService.checkLoggedIn()){
      const userId = this.authService.getUserIdLoggedIn();
      this.userService.getFilesUploaded(userId).subscribe(file => {
          console.log("arcvivos: ");
          console.log(JSON.stringify(file.file[0].file, null, 4));
          if (file.success){
            this.files = file.file[0].file;
          }else if (underscore.isEmpty(file)){
            this.files = ["No hay ningun Archivo subido por usuario"]
          }
          else {
            // ya aqui en el server side se hace toda validacion si el archvivo es
            // nullo , undefined o vacio
            if(!file.success){
              this.files = [file.msg]
            }else {
              this.files = ["Error. No se ha podido obtener los archivos del usuarios"]
            }
          }
        }, err => {
          // observable can also return error
          console.log(err);
          // Show a error message
          this.flashMessage.show("Error Obteniendo archivos subidos por usuario",{cssClass:'alert-danger',timeout: 5000});
          return false;
      });
    }else {
      this.files = ["Error. No hay ningun usuario conectado"]
    }

    // Upload File
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
  }



  uploadAll(){
    console.log("llamada a uploadAll");
    console.log("lenght not uploaded item: " + this.uploader.getNotUploadedItems().length);

    var uploadFile;
    if (this.files.length >=4){
      var lengthOfList = this.files.length;
      // this will match the last hyphen [^-]*[^ -]$
      // this will match the first hyphen ^[^-]*[^ -]
      // regex expresion will retrieve everything before the last "-" hyphen que va
      // a ser el que yo le pongo en el server
      var lastFile = this.files[lengthOfList -1].match(/^[^-]*[^-]/g);
      // matche everything before a -
      var filetoUpload = this.uploader.queue.concat()[0]._file.name.match(/^[^-]*[^ -]/g);
      // console.log("file tp" + filetoUpload);
      uploadFile = window.confirm("El archivo: \"" + lastFile + "\" sera remplazado con el archivo \""  + filetoUpload + "\" " );
    }

    if (uploadFile == true || this.files.length <=4){
      console.log("uplaod file es true");
      this.uploader.uploadAll();

    }else if (uploadFile == false){
      window.alert("La subida del archivo fue cancelada");
    }else{
      window.alert("Un error ocurrio al subir el archivo")
    }
  }

}
