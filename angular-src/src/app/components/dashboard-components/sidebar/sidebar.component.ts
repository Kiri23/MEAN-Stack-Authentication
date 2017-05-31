import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // Pass data from parent component to child component (ListGroup)
  @Input('admin-Dashboard-totalUser-Props') totalUserProps

  constructor() {
   }

  ngOnInit() {
    // this.totalUser = this.chi
    // console.log(this.totalUser);
  }

}
