import { Component, Input, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { InfoModalService } from 'src/app/services/info-modal.service';

@Component({
  selector: 'app-track-list-item',
  templateUrl: './track-list-item.component.html',
  styleUrls: ['./track-list-item.component.scss']
})
export class TrackListItemComponent implements OnInit {
  @Input() track : any;

  faInfo = faInfoCircle;

  constructor(
    private infoModal : InfoModalService
  ) { }

  info() {
    this.infoModal.openModal(this.track.id, 'track');
  }

  ngOnInit(): void {
  }

}
