import { MigrationInterface, QueryRunner } from 'typeorm';

export class userModel1623863183319 implements MigrationInterface {
  name = 'userModel1623863183319';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `users` (`id` varchar(36) NOT NULL, `name` varchar(35) NOT NULL, `last_name` varchar(35) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(35) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`'
    );
    await queryRunner.query('DROP TABLE `users`');
  }
}
