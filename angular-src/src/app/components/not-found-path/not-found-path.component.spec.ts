import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPathComponent } from './not-found-path.component';

describe('NotFoundPathComponent', () => {
  let component: NotFoundPathComponent;
  let fixture: ComponentFixture<NotFoundPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
