import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFormFieldComponent } from './theme-form-field.component';

describe('ThemeFormFieldComponent', () => {
  let component: ThemeFormFieldComponent;
  let fixture: ComponentFixture<ThemeFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeFormFieldComponent]
    });
    fixture = TestBed.createComponent(ThemeFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
