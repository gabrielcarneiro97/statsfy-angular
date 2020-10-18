import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { SpotifyService } from './spotify.service';

export type DataType = {
  type : 'artist' | 'track';
  artist : any;
  track : any;
};

@Injectable({
  providedIn: 'root'
})
export class InfoModalService {
  show : Observable<boolean>;
  changeShow : Subscriber<boolean>;

  data : Observable<DataType>;
  changeData : Subscriber<DataType>;

  constructor(
    private spotify : SpotifyService,
  ) {
    this.show = new Observable((observable) => {
      observable.next(false);
      this.changeShow = observable;
    });

    this.data = new Observable((observable) => {
      observable.next(null);
      this.changeData = observable;
    });
  }

  closeModal() {
    this.changeShow.next(false);
  }

  openModal(id : string, type : 'artist' | 'track') {
    this.spotify.getArtistOrTrack(id, type).subscribe((observable) => {
      this.changeData.next({
        type,
        artist: type === 'artist' ? observable.valueOf() : null,
        track: type === 'track' ? observable.valueOf() : null,
      });
      this.changeShow.next(true);
    });
  }
}
