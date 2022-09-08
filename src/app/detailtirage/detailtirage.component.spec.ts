import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtirageComponent } from './detailtirage.component';

describe('DetailtirageComponent', () => {
  let component: DetailtirageComponent;
  let fixture: ComponentFixture<DetailtirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
