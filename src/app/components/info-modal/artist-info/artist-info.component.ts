import { Component, Input, OnInit } from '@angular/core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {
  @Input() artist;

  faSpotify = faSpotify;

  constructor() { }

  openSpotify() {
    window.open(this.artist.external_urls.spotify, '');
  }

  ngOnInit(): void {
    console.log(this.artist);
  }

}
