import { element } from 'protractor';
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
  listOfFileNames = []
  ngOnInit() {
    this.escuela = this.route.snapshot.queryParams["escuela"];
    console.log('parameter escuela:'+ this.escuela)
    this.loadFiles()
    
  }

  loadFiles(){
    console.log('escuela load')
    this.userService.getUserByEscuela(this.escuela).subscribe(data => {
      console.log("Escuela: "+ JSON.stringify(data.files, null, 4));
      for (var index = 0; index < data.files.length; index++) {
        for (var index2 = 0; index2 < data.files[index].length; index2++) {
          console.log(data.files[index][index2])
          this.listOfFileNames.push(data.files[index][index2])
        }   
        
      }

      

    });
  }
}
