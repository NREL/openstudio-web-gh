import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../classes/constants';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() publication: Publication;

  ngOnInit(): void {
    if (!this.publication) {
      throw new Error('Missing PublicationComponent property "publication".')
    }
  }
}
