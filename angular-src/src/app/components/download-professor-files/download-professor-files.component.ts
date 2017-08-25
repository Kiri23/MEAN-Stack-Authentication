import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-download-professor-files',
  templateUrl: './download-professor-files.component.html',
  styleUrls: ['./download-professor-files.component.css']
})
export class DownloadProfessorFilesComponent implements OnInit {

  constructor(private userService:UsersService,private route: ActivatedRoute) { }
  escuela = ""
  listOfFileNames = "No hay ningun archivos pa mostrar"
  ngOnInit() {
    this.escuela = this.route.snapshot.queryParams["escuela"];
    console.log('parameter escuela:'+ this.escuela)
    this.loadFiles()
    
  }

  loadFiles(){
    console.log('escuela load')
    this.userService.getUserByEscuela(this.escuela).subscribe(data => {
      console.log("Escuela: "+ JSON.stringify(data.files, null, 4));
      this.listOfFileNames = data.files

      

    });
  }
}
