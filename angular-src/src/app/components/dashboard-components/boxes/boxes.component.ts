import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css','../../admin-dashboard/admin-dashboard.component.css']
})
export class BoxesComponent implements OnInit {
  // This number is pass by the admin-dashboard integration of app-boxes component
  @Input('admin-Dashboard-totalUser-Props') totalUsers

  constructor() {
  }

  ngOnInit() {
  }

}
