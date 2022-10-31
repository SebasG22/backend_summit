import { Field, ID, ObjectType, HideField } from '@nestjs/graphql';
import { Album } from 'src/albums/album.model';

@ObjectType()
export class Song {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @HideField()
  albumId: number;

  @Field()
  album?: Album;
}
