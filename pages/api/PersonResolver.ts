import 'reflect-metadata';
import { Query, Resolver, Arg } from 'type-graphql';

@Resolver()
export class PersonResolver {
  @Query(() => String)
  async fullName(
    @Arg('fName') firstName: string,
    @Arg('lName') lastName: string
  ): Promise<String> {
    return firstName + ' ' + lastName;
  }
}
