import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksToggleComponent } from './links-toggle.component';

describe('LinkToggleComponent', () => {
  let component: LinksToggleComponent;
  let fixture: ComponentFixture<LinksToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksToggleComponent],
    });
    fixture = TestBed.createComponent(LinksToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
