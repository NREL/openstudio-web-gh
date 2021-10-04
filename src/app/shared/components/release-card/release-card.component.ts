import { Component, Input, OnInit } from '@angular/core';
import { PluginRelease, Release } from '../../classes/constants';
import { GoogleAnalyticsService } from '../../../google-analytics.service';

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrls: ['./release-card.component.scss']
})
export class ReleaseCardComponent implements OnInit {
  @Input() release: Release | PluginRelease;

  constructor( public googleAnalyticsService: GoogleAnalyticsService ) { }

  ngOnInit(): void {
    if (!this.release) {
      throw new Error('ReleaseCardComponent attribute "release" is required');
    }
  }

  trackDownload(type, platform){ 
    this
    .googleAnalyticsService
    .eventEmitter("download", "download", type, platform, 0);
  } 

}
