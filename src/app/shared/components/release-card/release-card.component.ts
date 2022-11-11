import { Component, Input, OnInit } from '@angular/core';
import { Platform, Release } from '../../classes/constants';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrls: ['./release-card.component.scss']
})
export class ReleaseCardComponent implements OnInit {
  @Input() release: Release;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    if (!this.release) {
      throw new Error('ReleaseCardComponent attribute "release" is required');
    }
  }

  trackDownload(type: 'sdk' | 'openstudio-application' | 'pat' | 'developer-sdk', platform: Platform, linkUrl: string): void {
    this.googleAnalyticsService.downloadEvent(type, platform, linkUrl);
  }

}
