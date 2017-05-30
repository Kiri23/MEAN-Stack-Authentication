import { Component, OnInit,Input } from '@angular/core';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-table-columns',
  templateUrl: './table-columns.component.html',
  styleUrls: ['./table-columns.component.css']
})
export class TableColumnsComponent implements OnInit {
  @Input() value;
  @Input() header;

  constructor(table:TableComponent) {
      table.addColumn(this)
  }

  ngOnInit() {
  }

}
