import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  @Input() songs : any[];
  @Input() title : string;

  pageSize : number = 10;
  page : any[];

  constructor() { }


  getPageData(pageIndex : number) {
    const beg = (pageIndex - 1) * this.pageSize;
    const end = beg + this.pageSize;

    this.page = this.songs.slice(beg, end);
  }

  ngOnInit(): void {
    this.getPageData(1);
  }

}
