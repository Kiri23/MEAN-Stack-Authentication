import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-display-professors',
  templateUrl: './display-professors.component.html',
  styleUrls: ['./display-professors.component.css']
})
export class DisplayProfessorsComponent implements OnInit {
  
  /**
   * The names of the school in the db.
   * @memberOf TableComponent
   */ 
  schoolNames;
  /**
   * The profesors on each schools 
   * @memberOf TableComponent
   */
  professors = [];
  dictionaryKeys = Object.keys;

  dictionary: {[escuela:string]:string[];} = {
      // "Escuela uno":["Mi nombre","Segundo Nombre","Tercer Nombre"],
      // "Escuela dos":["Mi nombre"], 
      // "Escuela Tres":["Nombre de jose Juan","Jose juan nombre"],
      // "Escuela Cuatro":["Juan jaramillo","Jason barwone","jasonz"]
  };

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.showSchoolNamesAndProfessor2()
  }

     /**
   * Function to retrieve all the School in the DB with his professor 
   * @memberOf TableComponent
   */
  showSchoolNamesAndProfessor2(){
    this.userService.getAllSchoolAndProfessor().subscribe(data => {
        console.log("Data de escuela: "+ JSON.stringify(data.professors, null, 4));
        this.schoolNames = data.schools;
        this.professors = data.professors
        var arra = [];
        var start = 0
        var end = data.numberOfSchool[this.schoolNames[0]];
        for (var index = 0; index < data.schools.length; index++) {
            // this.professors.push(data.professors[index].name)
            this.dictionary[this.schoolNames[index]] = this.professors.slice(start,end)
            console.log("Start antes : " + start + " ,End antes: "+ end + "\n")
            console.log("School Names:  " + this.schoolNames[index])            
            console.log("Professor slice: " ,this.professors.slice(start,end))
            console.log("Cantida de profesores : " + data.numberOfSchool[this.schoolNames[index]] + " para escuela: " + this.schoolNames[index]);
            console.log("Index del loop: " + index + "\n \n")
            start = end
            end += data.numberOfSchool[this.schoolNames[index + 1]];
            console.log("Start despues : " + start + " ,End despues: "+ end + "\n")
            console.log("Professor slice de la proxima linea: " ,this.professors.slice(start,end))
            console.log("--------------------------------------")
            
            
            
            }
        console.log("Profesores de escuela: "+ JSON.stringify(this.professors, null, 4)); 
        console.log("Escuela uno "+ this.dictionary["Escuela uno"])  
         
    });
  }
}
