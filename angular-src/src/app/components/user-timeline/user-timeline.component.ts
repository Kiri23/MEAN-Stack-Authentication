import { Component, OnInit } from '@angular/core';

/** Javascript function alert2
 * @see main.js 
 */
declare var alertT2: any;

@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.css']
})

export class UserTimelineComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
    console.log(alertT2)
  }
  
  alertT(){
    alertT2()
  }
  

}
