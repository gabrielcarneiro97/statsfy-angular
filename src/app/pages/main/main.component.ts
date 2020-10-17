import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  songs : any[];

  constructor() { }

  ngOnInit() {
    this.songs = [
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Treat You Better',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Shawn_Mendes_-_Illuminate.jpg/220px-Shawn_Mendes_-_Illuminate.jpg',
      },
    ];
  }

}
