import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesDynamicComponent } from './articles-dynamic.component';

describe('ArticlesDynamicComponent', () => {
  let component: ArticlesDynamicComponent;
  let fixture: ComponentFixture<ArticlesDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
