import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  @Input() data : Observable<any>;
  @Input() title : string = 'Músicas';

  tracks = [];

  loading : boolean = true;

  pageSize : number = 10;
  page : any[];

  constructor() { }

  getPageData(pageIndex : number) {
    const beg = (pageIndex - 1) * this.pageSize;
    const end = beg + this.pageSize;

    this.page = this.tracks.slice(beg, end);
  }

  ngOnInit(): void {
    this.data.subscribe((observable) => {
      this.tracks = observable.valueOf().items;
      this.getPageData(1);
      this.loading = false;
    });
  }

}
