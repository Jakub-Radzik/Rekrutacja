import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetRocketAnimationComponent } from './planet-rocket-animation.component';

describe('PlanetRocketAnimationComponent', () => {
  let component: PlanetRocketAnimationComponent;
  let fixture: ComponentFixture<PlanetRocketAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetRocketAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetRocketAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
