import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTireComponent } from './import-tire.component';

describe('ImportTireComponent', () => {
  let component: ImportTireComponent;
  let fixture: ComponentFixture<ImportTireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
