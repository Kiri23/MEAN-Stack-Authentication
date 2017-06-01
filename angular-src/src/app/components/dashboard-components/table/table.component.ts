import { Injectable,Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import {Http,Response} from '@angular/http';
import {UsersService} from '../../../services/users.service';
import {TableColumnsComponent} from '../table-columns/table-columns.component';

import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

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
  showUsers = 1;
  cuu = 1;
  user = [];

  constructor(private userService:UsersService, config: NgbPaginationConfig) { }
  ngOnInit() {
    // this.currentPage = 1;
    this.skipUser(this.currentPage )

  // this.userService.getUsers().subscribe(user => {
  //     var us:string;
  //     this.user = user
  //     console.log(this.user[0].name + " user data");
  //     for (let key of this.user) {
  //       // console.log(key.name + " user key data");
  //     }
  //  }

  } // End NGonInit()

  skipUser(currentPage){
     console.log(this.currentPage , "currentPage");
     this.showUsers = currentPage * 5
     console.log(this.showUsers);
     this.userService.skipUsers(currentPage).subscribe(user => {
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
