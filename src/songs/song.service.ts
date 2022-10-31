import { Injectable } from '@nestjs/common';
import { Song } from './song.model';

@Injectable()
export class SongService {
  private songs: Song[] = [
    {
      id: 1,
      name: 'Hey mor',
      albumId: 1,
    },
    {
      id: 2,
      name: 'Moscow Mule',
      albumId: 2,
    },
  ];

  getSongs(): Song[] {
    return this.songs;
  }

  addSong(name: string, albumId: number): Song {
    const newSong = {
      id: this.songs.length + 1,
      name,
      albumId,
    };

    this.songs.push(newSong);

    return newSong;
  }
}
