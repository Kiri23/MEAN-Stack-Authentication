import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() className = "glyphicon glyphicon-user"
  @Input() number = 0
  @Input() text = "N/A"


  constructor() { }

  ngOnInit() {
  }

}
