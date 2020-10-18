import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { InfoModalService, DataType } from '../../services/info-modal.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  show : boolean = false;
  data : DataType = null;

  faLeftArrow = faChevronLeft;

  type = '';
  title = '';

  constructor(
    private infoModalService: InfoModalService,
  ) { }

  close() {
    this.infoModalService.closeModal();
  }

  ngOnInit(): void {
    this.infoModalService.show.subscribe((observable) => {
      this.show = observable.valueOf();
    });

    this.infoModalService.data.subscribe((observable) => {
      this.data = observable;
      this.type = this.data?.type;

      switch(this.type) {
        case 'album':
          this.title = 'Informações do Álbum';
          break;
        case 'track':
          this.title = 'Informações da Música';
          break;
        case 'artist':
          this.title = 'Informações do Artista';
          break;
      }
    });
  }

  goBack() {
    this.infoModalService.goBack();
  }

}
