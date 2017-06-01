import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from '../../services/users.service';
// Third Party Javscript libaries
import * as underscore from 'underscore';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css','../admin-dashboard/admin-dashboard.component.css']
})
export class AdminUsersComponent implements OnInit {
  allUsers
  totalUsers
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(user => {
      this.allUsers = user
       console.log(user , " user data ");
      // use underscore size - return the size of an object
      this.totalUsers = underscore.size(user);
      console.log(this.totalUsers , " toatl user all son 7 ");

    });
  }

  // this function only get call when in the parent Component (Aka app-table) fire a onClick Function (aka onClick pagination item). passing data(currentPage int) from parent component(app-table) to this component admin-users.
  skipUser(user: any) {
    this.allUsers = user
    console.log(user , " user evento ");
 }


}
