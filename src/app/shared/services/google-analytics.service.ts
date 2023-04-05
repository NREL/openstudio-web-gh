import { Injectable } from '@angular/core';
import { Platform } from '../classes/constants';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  downloadEvent(
    type: 'sdk' | 'openstudio-application' | 'pat' | 'developer-sdk',
    platform: Platform,
    linkUrl: string
  ): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag('event', 'download', {
      type,
      platform,
      linkUrl
    });
  }
}
