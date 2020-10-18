import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-modal-button',
  templateUrl: './info-modal-button.component.html',
  styleUrls: ['./info-modal-button.component.scss']
})
export class InfoModalButtonComponent implements OnInit {
  @Input() text;
  @Input() icon;
  @Output() click : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
