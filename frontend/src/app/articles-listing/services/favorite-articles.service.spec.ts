import {TestBed} from '@angular/core/testing';

import {FavoriteArticlesService} from './favorite-articles.service';

describe('FavoriteArticlesService', () => {
  let service: FavoriteArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
