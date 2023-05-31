import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsPostsComponent } from './politics-posts.component';

describe('PoliticsPostsComponent', () => {
  let component: PoliticsPostsComponent;
  let fixture: ComponentFixture<PoliticsPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticsPostsComponent]
    });
    fixture = TestBed.createComponent(PoliticsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
