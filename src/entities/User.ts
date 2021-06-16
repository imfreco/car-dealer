import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 35 })
  name!: string;

  @Column({ type: 'varchar', length: 35, name: 'last_name' })
  lastName!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 35 })
  password!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
