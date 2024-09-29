import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailesComponent } from './article-detailes.component';

describe('ArticleDetailesComponent', () => {
  let component: ArticleDetailesComponent;
  let fixture: ComponentFixture<ArticleDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleDetailesComponent]
    });
    fixture = TestBed.createComponent(ArticleDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
