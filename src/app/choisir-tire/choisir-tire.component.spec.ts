import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirTireComponent } from './choisir-tire.component';

describe('ChoisirTireComponent', () => {
  let component: ChoisirTireComponent;
  let fixture: ComponentFixture<ChoisirTireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirTireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisirTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
