import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list-item',
  templateUrl: './track-list-item.component.html',
  styleUrls: ['./track-list-item.component.scss']
})
export class TrackListItemComponent implements OnInit {
  @Input() track : any;

  constructor() { }

  ngOnInit(): void {
  }

}
