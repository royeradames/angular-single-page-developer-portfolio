import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendMentorComponent } from './frontend-mentor.component';

describe('FrontendMentorComponent', () => {
  let component: FrontendMentorComponent;
  let fixture: ComponentFixture<FrontendMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendMentorComponent],
    });
    fixture = TestBed.createComponent(FrontendMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
