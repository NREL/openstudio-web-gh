import { Component } from '@angular/core';
import { Release } from '../shared/classes/constants';
import { releases } from '../shared/classes/releases';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent {
  readonly releases = releases;

  version(type: Release['type']): string {
    const release = releases.find(release => release.type === type);
    return release ? release.version : '';
  }
}
