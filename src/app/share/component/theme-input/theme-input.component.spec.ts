import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeInputComponent } from './theme-input.component';

describe('ThemeInputComponent', () => {
  let component: ThemeInputComponent;
  let fixture: ComponentFixture<ThemeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeInputComponent],
    });
    fixture = TestBed.createComponent(ThemeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
