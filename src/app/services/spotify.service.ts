import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  store;
  accessToken;

  constructor(
    private http : HttpClient,
    private auth : AuthService,
  ) {
    this.store = {};
    this.auth.accessToken.subscribe((observable) => {
      this.accessToken = observable.valueOf();
    });
  }

  headers() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
    };
  }

  private get(url : string, force : boolean) : Observable<Object> {
    if (this.store[url] && !force) return this.store[url];

    const headers = this.headers();
    return this.http.get(url, { headers });
  }

  getTop(type: 'artists' | 'tracks', timeRange: 'long_term' | 'medium_term' | 'short_term' = 'medium_term', force: boolean = false) {
    const url = `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}`;
    return this.get(url, force);
  }

  getArtist(id : string, force: boolean = false) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    return this.get(url, force);
  }

  getTrack(id : string, force: boolean = false) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    return this.get(url, force);
  }

  getArtistOrTrack(id : string, type : 'artist' | 'track', force: boolean = false) {
    return type === 'artist' ? this.getArtist(id, force) : this.getTrack(id, force);
  }
}
