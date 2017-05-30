import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
// third party
import {DataTableModule} from "angular2-datatable";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userService:UsersService) { }
  data;
  us:Object[] = [];
  ngOnInit() {
    // this.userService.getUsers().subscribe(user => {
    //   console.log("user table " + user[0].email);
    //   this.data = user
    //   // var us:string;
    //   console.log(this.data[0].email + " user data");
    //   // for (this.us of this.data) {
    //   //   console.log(this.us + " user key data");
    //   // }
    //
    // });

  }


}
