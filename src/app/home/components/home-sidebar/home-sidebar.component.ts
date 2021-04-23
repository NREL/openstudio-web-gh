import { Component } from '@angular/core';
import { news } from '../../../shared/classes/news';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent {
  readonly news = news;

}
