import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfessorsComponent } from './display-professors.component';

describe('DisplayProfessorsComponent', () => {
  let component: DisplayProfessorsComponent;
  let fixture: ComponentFixture<DisplayProfessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
