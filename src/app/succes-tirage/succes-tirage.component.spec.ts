import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesTirageComponent } from './succes-tirage.component';

describe('SuccesTirageComponent', () => {
  let component: SuccesTirageComponent;
  let fixture: ComponentFixture<SuccesTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
