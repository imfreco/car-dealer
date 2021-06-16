import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 35 })
  name!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 35, name: 'last_name' })
  lastName!: string;

  @Field(() => String)
  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 35 })
  password!: string;

  @Field(() => String)
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Field(() => String)
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
