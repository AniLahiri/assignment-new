import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Person } from '../types/Person';

@Resolver(() => Person)
export class PersonResolver {
  @Query(() => String)
  async getPersonFullName(
    @Arg('fName') firstName: number,
    @Arg('lName') lastName: number
  ): Promise<String | undefined> {
    return firstName + ' ' + lastName;
  }
}
