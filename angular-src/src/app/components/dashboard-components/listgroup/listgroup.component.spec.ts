import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardComponent } from './sidebard.component';

describe('SidebardComponent', () => {
  let component: SidebardComponent;
  let fixture: ComponentFixture<SidebardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
