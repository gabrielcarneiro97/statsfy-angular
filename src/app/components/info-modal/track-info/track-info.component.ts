import { Component, Input, OnInit } from '@angular/core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCompactDisc, faUser } from '@fortawesome/free-solid-svg-icons';
import { InfoModalService } from 'src/app/services/info-modal.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {
  @Input() track = null;

  faSpotify = faSpotify;
  faUser = faUser;
  faDisc = faCompactDisc;

  constructor(
    private infoModal : InfoModalService,
  ) { }

  click() {
    console.log('click');
  }

  openSpotify() {
    window.open(this.track.external_urls.spotify, '');
  }

  artistInfo() {
    this.infoModal.openModal(this.track.artists[0].id, 'artist');
  }

  albumInfo() {
    this.infoModal.openModal(this.track.album.id, 'album');
  }

  ngOnInit(): void {
    console.log(this.track);
  }

}
