import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPostsComponent } from './news-posts.component';

describe('NewsPostsComponent', () => {
  let component: NewsPostsComponent;
  let fixture: ComponentFixture<NewsPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPostsComponent]
    });
    fixture = TestBed.createComponent(NewsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
