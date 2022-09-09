import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillisteComponent } from './detailliste.component';

describe('DetaillisteComponent', () => {
  let component: DetaillisteComponent;
  let fixture: ComponentFixture<DetaillisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
