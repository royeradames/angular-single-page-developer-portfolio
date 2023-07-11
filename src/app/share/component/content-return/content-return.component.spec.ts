import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentReturnComponent } from './content-return.component';

describe('ContentReturnComponent', () => {
  let component: ContentReturnComponent;
  let fixture: ComponentFixture<ContentReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentReturnComponent]
    });
    fixture = TestBed.createComponent(ContentReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
