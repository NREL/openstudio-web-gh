import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { developerNews } from '../shared/classes/developer-news';

@Component({
  selector: 'app-developer-news',
  templateUrl: './developer-news.component.html',
  styleUrls: ['./developer-news.component.scss']
})
export class DeveloperNewsComponent {
  readonly resultsPerPage = 8;

  // Chunk news items
  readonly news = developerNews.reduce((arr, item, i) => {
    return i % this.resultsPerPage === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);

  page = 1;
  totalPages = Math.ceil(developerNews.length / this.resultsPerPage) || 1;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const {page} = params;
      if (/^\d+$/.test(page) && Number(page) > 0) {
        this.page = Math.min(Number(page), this.totalPages);
      } else {
        this.page = 1;
      }
    });
  }

}
