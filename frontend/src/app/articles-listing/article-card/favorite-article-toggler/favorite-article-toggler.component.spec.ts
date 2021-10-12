import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArticleTogglerComponent } from './favorite-article-toggler.component';

describe('FavoriteArticleTogglerComponent', () => {
  let component: FavoriteArticleTogglerComponent;
  let fixture: ComponentFixture<FavoriteArticleTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteArticleTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteArticleTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
