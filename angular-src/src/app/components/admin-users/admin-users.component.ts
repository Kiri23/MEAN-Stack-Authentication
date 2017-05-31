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
  totalUsers
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      // use underscore size - return the size of an object
      this.totalUsers = underscore.size(user);


    });
  }

}
