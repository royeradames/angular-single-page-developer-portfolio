import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMenuComponent } from './theme-menu.component';

describe('ThemeMenuComponent', () => {
  let component: ThemeMenuComponent;
  let fixture: ComponentFixture<ThemeMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeMenuComponent]
    });
    fixture = TestBed.createComponent(ThemeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
