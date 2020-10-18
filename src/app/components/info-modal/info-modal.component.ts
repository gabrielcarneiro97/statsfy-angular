import { Component, OnInit } from '@angular/core';

import { InfoModalService, DataType } from '../../services/info-modal.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  show : boolean = false;

  data : DataType = null;

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
      console.log(observable);
      this.data = observable;
    });
  }

}
