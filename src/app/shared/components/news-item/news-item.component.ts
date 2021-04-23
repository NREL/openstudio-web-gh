import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';
import { NewsItem, NewsType } from '../../classes/constants';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() news: NewsItem;
  url: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (!this.news) {
      throw new Error('NewsItemComponent attribute "news" is required');
    }
    const newsType = this.route.snapshot.url.length ? this.route.snapshot.url[0].path as NewsType : 'news';
    const epoch = DateTime.fromSQL(this.news.time).ts / 1000;
    this.url = `/${newsType}/${epoch}`;
  }
}
