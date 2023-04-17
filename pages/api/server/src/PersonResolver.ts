import 'reflect-metadata';
import { Query, Resolver, Mutation, Arg, FieldResolver } from 'type-graphql';
import { Person } from './Person';

@Resolver(() => Person)
export class PersonResolver {
  // @Query(() => String)
  // async getPersonFullName(
  //   @Arg('fName') firstName: number,
  //   @Arg('lName') lastName: number
  // ): Promise<String | undefined> {
  //   return firstName + ' ' + lastName;
  // }

  @FieldResolver()
  fullName(@Arg('fName') firstName: number, @Arg('lName') lastName: number) {
    return firstName + ' ' + lastName;
  }
}
