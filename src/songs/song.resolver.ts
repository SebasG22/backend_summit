import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AlbumService } from '../albums/album.service';
import { Song } from './song.model';
import { SongService } from './song.service';

@Resolver('Song')
export class SongResolver {
  constructor(
    private songService: SongService,
    private albumService: AlbumService,
  ) {}

  @Query('allSongs')
  getAllSongs(): Song[] {
    return this.songService.getSongs();
  }

  @ResolveField()
  async album(@Parent() album) {
    const { id } = album;
    return this.albumService.getAlbumById(id);
  }

  @Mutation()
  addSong(@Args('name') name: string, @Args('albumId') albumId: number) {
    return this.songService.addSong(name, albumId);
  }
}
