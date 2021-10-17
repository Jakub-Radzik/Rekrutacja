import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isBackToTopButtonVisible = AppComponent.visibilityCondition();

  title = 'spaceflight-news-solvro';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isBackToTopButtonVisible = AppComponent.visibilityCondition();
  }

  backToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  private static visibilityCondition() {
    return window.pageYOffset > 500 && window.innerWidth < 1024;
  }

}
