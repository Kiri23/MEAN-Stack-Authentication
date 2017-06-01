import { Injectable,Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import {Http,Response} from '@angular/http';
import {UsersService} from '../../../services/users.service';
import {TableColumnsComponent} from '../table-columns/table-columns.component';

// Third Party
import * as underscore from 'underscore'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataset;
  @Input() showFilter:boolean = false;
  @Input() className="";
  @Input() text = "N/A";

  columns: TableColumnsComponent[] = [];
  currentPage = 1;
  // Output the currentPage Property. This is how to pass a property from a child element to a parent element that integrate this component
  @Output() exportProp = new EventEmitter<any>();
  showUsersSkipNumber = 0;
  totalUsersCount;
  cuu = 1;
  user = [];

  constructor(private userService:UsersService) { }
  ngOnInit() {
    // this.currentPage = 1;
    this.skipUser(this.currentPage )

  this.userService.getAllUsers().subscribe(user => {
      this.totalUsersCount = underscore.size(user)
   });

  } // End NGonInit()

  skipUser(currentPage){
     console.log(this.currentPage , "currentPage");
    //  Logic to skip the right user for it to show it on the table. currentPage = 2. currentPage(2) - 1 = (1 * 5) + 1 = 6. 6 is the right amount of user I want to skip over. and this will also work with currentPage = 3,4,5 etc. each currentPage will only show #5 users. I wan to skip every 5 integer number each time
     this.showUsersSkipNumber = ( (currentPage - 1) * 5 ) + 1
     // This are the first five users. I dont want to skip this users.This mean tha thi's the first page. I don't want to skip users I want to skip before showUsersSkipNumber is > 5
     if(this.showUsersSkipNumber < 5){
       // dont skip no one show the first 5 in the table
       this.showUsersSkipNumber = 0;
     }

     console.log(this.showUsersSkipNumber, " los usuario a skip");
     // call to the database to skip user
     this.userService.skipUsers(this.showUsersSkipNumber).subscribe(user => {
       console.log(user , " user from skip user");
       // emit a event aka send the exportProp to the parent element
       this.exportProp.emit(user);
     });

  }

  // this.name =
  // { "person": [
  //     { "name":"John","email":"john@hotmail.com","joined":"dec 12"},
  //     { "name":"Josue","email":"Josue@hotmail.com","joined":"dec 13"},
  //     { "name":"Doe","email":"Doe@hotmail.com","joined":"dec 13"}
  //   ],
  //   "headers":[
  //     "Name","Email","Joined"
  //   ]
  // };
}
