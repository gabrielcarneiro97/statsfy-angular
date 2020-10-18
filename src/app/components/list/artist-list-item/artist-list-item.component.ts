import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list-item',
  templateUrl: './artist-list-item.component.html',
  styleUrls: ['./artist-list-item.component.scss']
})
export class ArtistListItemComponent implements OnInit {
  @Input() artist : any;

  constructor() { }

  ngOnInit(): void {
  }

}
