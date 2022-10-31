import { Injectable } from '@nestjs/common';
import { Album } from './album.model';

@Injectable()
export class AlbumService {
  private albums: Album[] = [
    {
      id: 1,
      name: 'Ozutochi',
      year: '2022',
    },
    {
      id: 2,
      name: 'YHLQSMDLG',
      year: '2020',
    },
  ];

  getAlbums(): Album[] {
    return this.albums;
  }

  getAlbumById(id: number) {
    return this.albums.find((item) => item.id === id);
  }

  addAlbum(name: string, year: string): Album {
    const newAlbum = {
      id: this.albums.length + 1,
      name,
      year,
    };

    this.albums.push(newAlbum);

    return newAlbum;
  }
}
