import { Component } from '@angular/core';
import { Title as TitleService } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { getTitle } from './shared/classes/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private titleService: TitleService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        titleService.setTitle(getTitle(event.urlAfterRedirects.split('?')[0]));
      }
    });
  }
}
