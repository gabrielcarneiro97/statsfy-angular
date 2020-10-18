import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data : Observable<any>;
  @Input() title = 'Músicas';
  @Input() type : 'artists' | 'tracks' = 'tracks';

  tracks = [];
  artists = [];

  loading = true;

  pageSize = 5;
  page : any[];

  constructor() { }

  getPageData(pageIndex : number) {
    const beg = (pageIndex - 1) * this.pageSize;
    const end = beg + this.pageSize;

    if (this.type === 'tracks') {
      this.page = this.tracks.slice(beg, end);
    } else {
      this.page = this.artists.slice(beg, end);
    }
  }

  ngOnInit(): void {
    this.data.subscribe((observable) => {
      if (this.type === 'tracks') {
        this.tracks = observable.valueOf().items;
      } else {
        this.artists = observable.valueOf().items;
      }
      this.getPageData(1);
      this.loading = false;
    });
  }

}
