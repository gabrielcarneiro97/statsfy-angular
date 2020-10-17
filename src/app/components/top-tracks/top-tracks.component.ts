import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {
  @Input() timeRange : 'short_term' | 'medium_term' | 'long_term' = 'medium_term';
  @Input() title : string;

  data : Observable<any>;

  constructor(
    private spotify : SpotifyService,
  ) { }

  async ngOnInit() {
    this.data = this.spotify.getTop('tracks', this.timeRange);
  }

}
