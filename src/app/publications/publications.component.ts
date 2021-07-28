import { Component } from '@angular/core';
import { publications } from "../shared/classes/publications";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  readonly publications = publications;

  constructor() {
  }
}
