import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Album } from './album.model';
import { AlbumService } from './album.service';

@Resolver('Album')
export class AlbumResolver {
  constructor(private albumService: AlbumService) {}

  @Query('allAlbums')
  getAllAlbums(): Album[] {
    return this.albumService.getAlbums();
  }

  @Mutation()
  addAlbum(@Args('name') name: string, @Args('year') year: string) {
    return this.albumService.addAlbum(name, year);
  }
}
