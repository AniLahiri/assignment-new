import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Person {
  @Field()
  firstName!: string;
  @Field()
  lastName!: string;
  @Field()
  name!: string;
}
