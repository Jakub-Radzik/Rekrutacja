import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-animation',
  templateUrl: './landing-animation.component.html',
  styleUrls: ['./landing-animation.component.css',
    './landing-animation-planet.css',
    './landing-animation-objects.css',
    './parallax/landing-animation-parallax-stars.css',
    './parallax/landing-animation-parallax-stars-1.css',
    './parallax/landing-animation-parallax-stars-1.1.css',
    './parallax/landing-animation-parallax-stars-2.css',
    './parallax/landing-animation-parallax-stars-2.1.css',
    './parallax/landing-animation-parallax-stars-3.css',
    './parallax/landing-animation-parallax-stars-3.1.css'
  ]
})
export class LandingAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
