import { Injectable,Component, OnInit,EventEmitter, Input,Output,NgZone } from '@angular/core';
import {Http,Response} from '@angular/http';
import {UsersService} from '../../../services/users.service';


// Third Party
import * as underscore from 'underscore'

/**
 * This is a child class for the AdminDashBoardComponent that contain the information of the schools and their s
 * @see {@link AdminDashboardComponent }
 * @class TableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  /**
   * The data to show in the table
   * @memberOf TableComponent
   */
  @Input() dataset;
  /**
   * A boolean to indicate if the search bar should be displayed 
   * @type {boolean}
   * @memberOf TableComponent
   */
  @Input() showFilter:boolean = false;
  /**
   * Give Css Class to Specific elements
   * @memberOf TableComponent
   */
  @Input() className="";
  /**
   * 
   * The text of the header in the table
   * @memberOf TableComponent
   */
  @Input() text = "N/A";

  /**
   * The Current Page to show in the table
   * @memberOf TableComponent
   */
  currentPage = 1;
  /**
   * Property to export to a parent element
   * @memberOf TableComponent
   */
  // Output the currentPage Property. This is how to pass a property from a child element to a parent element that integrate this component
  @Output() exportProp = new EventEmitter<any>();
  /**
   * How many user you want to show in the table
   * @memberOf TableComponent
   */
  showUsersSkipNumber = 0;
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
  /**
   * Files of each professor
   * @memberOf TableComponent
   */
  numberProfessorsFiles = [];

  count = 0
  arra = [];

  dictionaryKeys = Object.keys;

  dictionary: {[escuela:string]:string[];} = {
      // "Escuela uno":["Mi nombre","Segundo Nombre","Tercer Nombre"],
      // "Escuela dos":["Mi nombre"], 
      // "Escuela Tres":["Nombre de jose Juan","Jose juan nombre"],
      // "Escuela Cuatro":["Juan jaramillo","Jason barwone","jasonz"]
  };


  /**
   * Creates an instance of TableComponent.
   * @param {UsersService} userService 
   * @param {NgZone} zone 
   * 
   * @memberOf TableComponent
   */
  constructor(private userService:UsersService,private zone:NgZone) { }

  /**
   * Initialization of the componet
   * @memberOf TableComponent
   */
  ngOnInit() {
    // this.currentPage = 1;
    this.skipUser(this.currentPage );
    this.showSchoolNamesAndProfessor2();
    // this.dictionary["Escuela uno"] = ["Nuevos nombres puestos","Por mi para ","Saber si funcionan"];
  } // End NGonInit()

  /**
   * Method for the paginantion to work in the table. Show only a limite result of user in the table
   * @param {any} currentPage The current Page to show
   * 
   * @memberOf TableComponent
   */
  skipUser(currentPage){
    //  Logic to skip the right user for it to show it on the table. currentPage = 2. currentPage(2) - 1 = (1 * 5) + 1 = 6. 6 is the right amount of user I want to skip over. and this will also work with currentPage = 3,4,5 etc. each currentPage will only show #5 users. I wan to skip every 5 integer number each time
     this.showUsersSkipNumber = ( (currentPage - 1) * 5 ) + 1
     // This are the first five users. I dont want to skip this users.This mean tha thi's the first page. I don't want to skip users I want to skip before showUsersSkipNumber is > 5
     if(this.showUsersSkipNumber < 5){
       // dont skip no one show the first 5 in the table
       this.showUsersSkipNumber = 0;
     }

     // call to the database to skip user
     this.userService.skipUsers(this.showUsersSkipNumber).subscribe(user => {
       console.log(user , " user from skip user");
       // emit a event aka send the exportProp to the parent element
       this.exportProp.emit(user);
     });

  }
  /**
   * Function to retrieve all the School in the DB with his professor 
   * @memberOf TableComponent
   */
  showSchoolNamesAndProfessor(){
    this.userService.getAllSchoolAndProfessor().subscribe(data => {
       var count = 0;
      /** Number of files for each school */
       var countFilesOfSchools = 0;
       console.log("Data de escuela: "+ JSON.stringify(data.professors, null, 4));
       this.schoolNames = data.schools;
       for (var index = 0; index < data.schools.length; index++) {
          this.professors.push(data.schools[index])
          if (index > 0){
            if(index < data.schools.length ){
              console.log("pushing number: " + countFilesOfSchools)
              this.numberProfessorsFiles.push(countFilesOfSchools);
              countFilesOfSchools = 0;
            }
          }
          if(count < data.professors.length){
            for (var index = 0; index < 3; index++) {
              if(count < data.professors.length){
                console.log("count: " + count)
                this.professors.push(data.professors[count].name);
                countFilesOfSchools  =  data.professors[count].file.length
                countFilesOfSchools += countFilesOfSchools;
                console.log("Count of files: " + countFilesOfSchools)
                count++;
              }
            }
          }
       }
       console.log("Data de escuela: "+ JSON.stringify(this.professors, null, 4));       
    });
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






  showSchoolNamesAndProfessor3(){
    this.userService.getAllSchoolAndProfessor().subscribe(data => {
        console.log("Data de escuela: "+ JSON.stringify(data.professors, null, 4));
        this.schoolNames = data.schools;
        this.professors = data.professors
        var arra = [];
        var start = 0
        var end = data.numberOfSchool[this.schoolNames[0]];
        for (var index = 0; index < data.schools.length; index++) {
            // this.professors.push(data.professors[index].name)
            if(index != data.schools.length -1){
              this.dictionary[this.schoolNames[index]] = this.professors.slice(start,end)
              console.log("Start: " + start + " ,End: "+ end + "\n")
              console.log("School Names:  " + this.schoolNames[index])            
              console.log("Professor slice: " ,this.professors.slice(start,end))
              console.log("numero: " + data.numberOfSchool[this.schoolNames[index]]);
              console.log("Index: " + index)
              console.log("--------------------------------------")
              start = end
              end += data.numberOfSchool[this.schoolNames[index]];
            }


            if(index == data.schools.length -1){
              console.log("Start: " + start + " end " + end)
              // start = end - data.numberOfSchool[this.schoolNames[index -1 ]]
              start = end
              end += data.numberOfSchool[this.schoolNames[index]];
              console.log("Ultima escuela")
              console.log("data number school anterior: " + data.numberOfSchool[this.schoolNames[index -1 ]])
              console.log("index: "+ index)
              console.log("Start: " + start + " ,End: "+ end + "\n")              
              this.dictionary[this.schoolNames[index]] = this.professors.slice(start,end);
              console.log("profesores: " , this.professors.slice(start,end) )
            }

        }
        console.log("Profesores de escuela: "+ JSON.stringify(this.professors, null, 4)); 
        console.log("Escuela uno "+ this.dictionary["Escuela uno"])  
         
    });
  }

  // showLengthFiles(){

  // }

}
