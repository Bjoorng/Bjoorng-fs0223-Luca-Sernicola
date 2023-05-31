import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPostsComponent } from './education-posts.component';

describe('EducationPostsComponent', () => {
  let component: EducationPostsComponent;
  let fixture: ComponentFixture<EducationPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationPostsComponent]
    });
    fixture = TestBed.createComponent(EducationPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
