import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodingMenuComponent } from './flooding-menu.component';

describe('FloodingMenuComponent', () => {
  let component: FloodingMenuComponent;
  let fixture: ComponentFixture<FloodingMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloodingMenuComponent]
    });
    fixture = TestBed.createComponent(FloodingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
