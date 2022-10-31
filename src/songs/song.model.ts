import { Album } from 'src/albums/album.model';

export interface Song {
  id: number;
  name: string;
  albumId: number;
  album?: Album;
}
