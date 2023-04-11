import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-cars';

  @ViewChild('priceAction', {static: false})
  public priceAction: ElementRef

  constructor() {
    
  }

  goScroll(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"})
  }
}
