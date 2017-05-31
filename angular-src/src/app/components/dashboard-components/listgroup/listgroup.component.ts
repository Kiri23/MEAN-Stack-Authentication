import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.css','../../admin-dashboard/admin-dashboard.component.css']
})
export class ListGroupComponent implements OnInit {
  // This property is retireve from the side bar component property that it's pass to the sidebar by the admin-dashboard that render the component
  @Input('side-bar-totalUserProps') totalUsers

  constructor() {

  }

  ngOnInit() {
  }

}
