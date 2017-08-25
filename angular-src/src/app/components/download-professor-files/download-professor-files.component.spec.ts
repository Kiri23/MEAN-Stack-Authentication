import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadProfessorFilesComponent } from './download-professor-files.component';

describe('DownloadProfessorFilesComponent', () => {
  let component: DownloadProfessorFilesComponent;
  let fixture: ComponentFixture<DownloadProfessorFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadProfessorFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadProfessorFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
