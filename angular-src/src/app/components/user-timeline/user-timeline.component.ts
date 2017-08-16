import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
/** Javascript function alert2
 * @see main.js 
 */
declare var alertT2: any;

/** Javscript external Load Timeline Function 
 * @see main.js
*/
declare var loadTimeline: any;




/**
 *  
 * 
 * @export
 * @class UserTimelineComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.css']
})

export class UserTimelineComponent implements OnInit {
    
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    console.log(alertT2)
    console.log("Componente initializado");
    loadTimeline();
  }
  
  alertT(){
    alertT2()
  }
  

}
