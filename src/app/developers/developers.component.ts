import { Component } from '@angular/core';
import { developerRelease } from '../shared/classes/releases';
import { developerNews } from '../shared/classes/developer-news';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {
  readonly release = developerRelease;
  readonly developerNews = developerNews;

}
