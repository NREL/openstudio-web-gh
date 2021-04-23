import { Component, Input, OnInit } from '@angular/core';
import { PluginRelease, Release } from '../../classes/constants';

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrls: ['./release-card.component.scss']
})
export class ReleaseCardComponent implements OnInit {
  @Input() release: Release | PluginRelease;

  ngOnInit(): void {
    if (!this.release) {
      throw new Error('ReleaseCardComponent attribute "release" is required');
    }
  }
}
