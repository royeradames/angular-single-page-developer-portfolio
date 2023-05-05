import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLinkComponent } from './theme-link.component';

describe('ThemeButtonComponent', () => {
  let component: ThemeLinkComponent;
  let fixture: ComponentFixture<ThemeLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeLinkComponent]
    });
    fixture = TestBed.createComponent(ThemeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
