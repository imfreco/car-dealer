import { Arg, Mutation, Resolver } from 'type-graphql';
import { CreateUserCommand } from '../commands/users';
import { CreateUserInput } from '../dtos/users';
import { User } from '../entities/User';

@Resolver()
export class UsersResolver {
  private createUserCommand: CreateUserCommand;

  constructor() {
    this.createUserCommand = new CreateUserCommand();
  }

  @Mutation(() => User)
  async createUser(@Arg('createUserInput') createUserInput: CreateUserInput) {
    this.createUserCommand.createUserInput = createUserInput;

    return await this.createUserCommand.execute();
  }
}
