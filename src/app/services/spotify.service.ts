import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http : HttpClient,
    private auth : AuthService,
  ) { }

  getTop(type: 'artists' | 'tracks', timeRange: 'long_term' | 'medium_term' | 'short_term' = 'medium_term') {
    const url = `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}`;
  }
}
