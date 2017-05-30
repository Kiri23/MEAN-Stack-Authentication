import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnsComponent } from './table-columns.component';

describe('TableColumnsComponent', () => {
  let component: TableColumnsComponent;
  let fixture: ComponentFixture<TableColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
