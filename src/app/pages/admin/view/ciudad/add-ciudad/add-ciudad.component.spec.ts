import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCiudadComponent } from './add-ciudad.component';

describe('AddCiudadComponent', () => {
  let component: AddCiudadComponent;
  let fixture: ComponentFixture<AddCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
