import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSkipComponent } from './content-skip.component';

describe('ContentSkipComponent', () => {
  let component: ContentSkipComponent;
  let fixture: ComponentFixture<ContentSkipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSkipComponent]
    });
    fixture = TestBed.createComponent(ContentSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
