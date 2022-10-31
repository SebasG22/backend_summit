import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Album {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  year: string;
}
