import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Album } from 'src/albums/album.model';
import { AlbumService } from '../albums/album.service';
import { Song } from './song.model';
import { SongService } from './song.service';

@Resolver(Song)
export class SongResolver {
  constructor(
    private songService: SongService,
    private albumService: AlbumService,
  ) {}

  @Query(() => [Song])
  allSongs() {
    return this.songService.getSongs();
  }

  @ResolveField(() => Album)
  async album(@Parent() album) {
    const { id } = album;
    return this.albumService.getAlbumById(id);
  }

  @Mutation(() => Song)
  addSong(@Args('name') name: string, @Args('albumId') albumId: number) {
    return this.songService.addSong(name, albumId);
  }
}
