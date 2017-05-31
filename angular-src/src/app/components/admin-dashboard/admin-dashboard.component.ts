import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
// third party
// How I add an javascript libary
import * as underscore from 'underscore';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalUsers
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      // use underscore size - return the size of an object
      this.totalUsers = underscore.size(user);


    });

  }


}
