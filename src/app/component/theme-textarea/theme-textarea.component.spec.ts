import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTextareaComponent } from './theme-textarea.component';

describe('ThemeTextareaComponent', () => {
  let component: ThemeTextareaComponent;
  let fixture: ComponentFixture<ThemeTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeTextareaComponent]
    });
    fixture = TestBed.createComponent(ThemeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
