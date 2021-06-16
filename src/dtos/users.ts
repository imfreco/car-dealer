import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'first name' })
  name!: string;

  @Field(() => String, { description: 'last name' })
  lastName!: string;

  @Field(() => String, { description: 'email' })
  email!: string;

  @Field(() => String, { description: 'password' })
  password!: string;
}
