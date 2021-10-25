import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isBackToTopButtonVisible = this.visibilityCondition();
  public title: string = 'spaceflight-news-solvro';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isBackToTopButtonVisible = this.visibilityCondition();
  }

  backToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  private visibilityCondition() {
    return window.pageYOffset > 500 && window.innerWidth < 1024;
  }

}
