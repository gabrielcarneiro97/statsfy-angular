import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {
  @Input() timeRange : 'short_term' | 'medium_term' | 'long_term' = 'medium_term';
  @Input() title : string;
  @Input() type : 'artists' | 'tracks' = 'tracks';

  data : Observable<any>;

  constructor(
    private spotify : SpotifyService,
  ) { }

  async ngOnInit() {
    this.data = this.spotify.getTop(this.type, this.timeRange);
  }

}
