import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegionalComponent } from './update-regional.component';

describe('UpdateRegionalComponent', () => {
  let component: UpdateRegionalComponent;
  let fixture: ComponentFixture<UpdateRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
