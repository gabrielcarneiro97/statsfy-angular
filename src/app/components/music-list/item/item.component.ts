import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() track : any;

  constructor() { }

  ngOnInit(): void {
  }

}
