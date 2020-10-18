import { Component, Input, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { InfoModalService } from 'src/app/services/info-modal.service';

@Component({
  selector: 'app-artist-list-item',
  templateUrl: './artist-list-item.component.html',
  styleUrls: ['./artist-list-item.component.scss']
})
export class ArtistListItemComponent implements OnInit {
  @Input() artist : any;

  faInfo = faInfoCircle;

  constructor(
    private infoModal : InfoModalService
  ) { }

  info() {
    this.infoModal.openModal(this.artist.id, 'artist');
  }

  ngOnInit(): void {
  }

}
