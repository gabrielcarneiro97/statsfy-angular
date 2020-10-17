import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list-item',
  templateUrl: './music-list-item.component.html',
  styleUrls: ['./music-list-item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() track : any;

  constructor() { }

  ngOnInit(): void {
  }

}
