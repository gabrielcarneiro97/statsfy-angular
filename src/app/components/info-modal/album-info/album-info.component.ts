import { Component, Input, OnInit } from '@angular/core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { InfoModalService } from 'src/app/services/info-modal.service';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {
  @Input() album;

  faSpotify = faSpotify;
  faUser = faUser;

  constructor(
    private infoModal : InfoModalService
  ) { }

  openSpotify() {
    window.open(this.album.external_urls.spotify, '');
  }

  artistInfo() {
    this.infoModal.openModal(this.album.artists[0].id, 'artist');
  }

  ngOnInit(): void {
  }

}
