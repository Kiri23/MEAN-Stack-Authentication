import { Injectable,Component, OnInit, Input } from '@angular/core';
import {Http,Response} from '@angular/http';
import {UsersService} from '../../../services/users.service';
import {TableColumnsComponent} from '../table-columns/table-columns.component';






@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataset;
  columns: TableColumnsComponent[] = [];

  addColumn(column)
{
  this.columns.push(column);
}


  @Input() className="";
  @Input() text = "N/A";
  name = {};
  user = [];
  items = [];

  constructor(private userService:UsersService) { }

  ngOnInit() {

    // this.userService.getUserById("592c40f1c5035d0011bcf62c").subscribe(user => {
    //   // user send with the response
    //   console.log(user.user.name + " user data");
    //
    // },err => {
    //   console.log(err);
    // });

    this.userService.getUsers().subscribe(user => {
      var us:string;
      this.user = user
      console.log(this.user[0].name + " user data");
      for (let key of this.user) {
        // console.log(key.name + " user key data");
      }

      // us = JSON.stringify(user)
      // this.items = us.split("{")
      // console.log(this.items + "  user array");
      // console.log( Object.keys+ " interfaz objeto");
    });

    this.name =
    { "person": [
        { "name":"John","email":"john@hotmail.com","joined":"dec 12"},
        { "name":"Josue","email":"Josue@hotmail.com","joined":"dec 13"},
        { "name":"Doe","email":"Doe@hotmail.com","joined":"dec 13"}
      ],
      "headers":[
        "Name","Email","Joined"
      ]
    };
  } // End NGonInit()

//   createRange(number){
//   var items: number[] = [];
//   for(var i = 1; i <= number; i++){
//      items.push(i);
//   }
//   return items;
// }

// createRange2(number){
// for(var i = 1; i <= this.user.length; i++){
//    this.items.push(i);
// }
// return this.items;
// }

}
