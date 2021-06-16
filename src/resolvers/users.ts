import { Arg, Mutation, Resolver } from 'type-graphql';
import { CreateUserInput } from '../dtos/users';
import { User } from '../entities/User';

@Resolver()
export class UsersResolver {
  @Mutation(() => User)
  async createUser(@Arg('createUserInput') createUserInput: CreateUserInput) {
    const user = User.create(createUserInput);
    await user.save();
    return user;
  }
}
