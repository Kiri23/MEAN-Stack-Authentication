import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPortfolioComponent } from './upload-portfolio.component';

describe('UploadPortfolioComponent', () => {
  let component: UploadPortfolioComponent;
  let fixture: ComponentFixture<UploadPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
