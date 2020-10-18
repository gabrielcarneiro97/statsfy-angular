import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { SpotifyService } from './spotify.service';

export type DataType = {
  type : 'artist' | 'track' | 'album';
  artist : any;
  track : any;
  album : any;
};

@Injectable({
  providedIn: 'root'
})
export class InfoModalService {
  show : Observable<boolean>;
  changeShow : Subscriber<boolean>;

  data : Observable<DataType>;
  changeData : Subscriber<DataType>;

  lastData = null;
  dataStack : DataType[] = [];

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
    this.lastData = null;
    this.dataStack = [];
    this.changeShow.next(false);
  }

  openModal(id : string, type : 'artist' | 'track' | 'album') {
    this.spotify.getArtistTrackOrAlbum(id, type).subscribe((observable) => {
      const data = {
        type,
        artist: type === 'artist' ? observable.valueOf() : null,
        track: type === 'track' ? observable.valueOf() : null,
        album: type === 'album' ? observable.valueOf() : null,
      };
      if (this.lastData === null) {
        this.lastData = data;
      } else {
        this.dataStack.push(this.lastData);
        this.lastData = data;
      }
      this.changeData.next(data);
      this.changeShow.next(true);
    });
  }

  goBack() {
    if (this.dataStack.length === 0) {
      return this.closeModal();
    }

    this.changeData.next(this.dataStack.pop());
  }
}
