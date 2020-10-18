import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  accessToken;

  constructor(
    private http : HttpClient,
    private auth : AuthService,
  ) {
    this.auth.accessToken.subscribe((observable) => {
      this.accessToken = observable.valueOf();
    });
  }

  headers() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
    };
  }

  private get(url : string) : Observable<Object> {
    const headers = this.headers();
    return this.http.get(url, { headers });
  }

  getTop(type: 'artists' | 'tracks', timeRange: 'long_term' | 'medium_term' | 'short_term' = 'medium_term') {
    const url = `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}`;
    return this.get(url);
  }

  getArtist(id : string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    return this.get(url);
  }

  getTrack(id : string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    return this.get(url);
  }

  getAlbum(id : string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    return this.get(url);
  }

  getArtistOrTrack(id : string, type : 'artist' | 'track') {
    return type === 'artist' ? this.getArtist(id) : this.getTrack(id);
  }

  getArtistTrackOrAlbum(id : string, type : 'artist' | 'track' | 'album') {
    switch(type) {
      case 'album':
        return this.getAlbum(id);
      case 'track':
        return this.getTrack(id);
      case 'artist':
        return this.getArtist(id);
      default:
        throw new Error('Unknown type');
    }
  }
}
