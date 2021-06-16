import { ICommand } from '.';
import { CreateUserInput } from '../dtos/users';
import { User } from '../entities/User';

const loggerPath = 'command::user::';

export class CreateUserCommand implements ICommand {
  private _createUserInput!: CreateUserInput;

  set createUserInput(payload: CreateUserInput) {
    this._createUserInput = payload;
  }

  async execute(): Promise<User> {
    try {
      const user = User.create(this._createUserInput);
      await user.save();
      return user;
    } catch (error) {
      console.log(`${loggerPath}CreateUserCommand:: ${error}`);
      throw new Error('database error in CreateUserCommand');
    }
  }
}
