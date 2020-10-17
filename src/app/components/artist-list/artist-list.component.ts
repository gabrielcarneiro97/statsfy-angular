import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  @Input() data : Observable<any>;
  @Input() title = 'Artistas';

  artists = [];

  loading = true;

  pageSize = 10;
  page : any[];

  constructor() { }

  getPageData(pageIndex : number) {
    const beg = (pageIndex - 1) * this.pageSize;
    const end = beg + this.pageSize;

    this.page = this.artists.slice(beg, end);
  }

  ngOnInit(): void {
    this.data.subscribe((observable) => {
      this.artists = observable.valueOf().items;
      this.getPageData(1);
      this.loading = false;
    });
  }

}
