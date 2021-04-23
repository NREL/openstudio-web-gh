import { Component } from '@angular/core';
import { releases } from '../shared/classes/releases';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent {
  readonly releases = releases;

  constructor() {
  }

}
