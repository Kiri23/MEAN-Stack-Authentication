import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimelineComponent } from './user-timeline.component';

describe('UserTimelineComponent', () => {
  let component: UserTimelineComponent;
  let fixture: ComponentFixture<UserTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
