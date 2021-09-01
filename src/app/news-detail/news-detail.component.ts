import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { findNewsItem, NewsItem, NewsType } from '../shared/classes/constants';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {
  newsItem: NewsItem;
  private readonly newsType: NewsType;
  private readonly timestamp: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.newsType = this.route.snapshot.url[0].path as NewsType;
    const timestamp = this.route.snapshot.paramMap.get('timestamp');
    if (/^\d+$/.test(timestamp)) {
      this.timestamp = Number(timestamp);
    } else {
      // Redirect if invalid timestamp
      this.router.navigate([this.newsType]);
    }

    const newsItem = findNewsItem(this.timestamp, this.newsType);
    if (newsItem) {
      this.newsItem = newsItem;
    } else {
      // Timestamp not found
      this.router.navigate([this.newsType]);
    }
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
