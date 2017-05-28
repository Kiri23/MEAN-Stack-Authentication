import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.css','../../admin-dashboard/admin-dashboard.component.css']
})
export class ListGroupComponent implements OnInit {
  @Input() name = "test hello";
  constructor() { }

  ngOnInit() {
  }

}
