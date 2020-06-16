import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstGenerateMigrations1590422664469 implements MigrationInterface {
  name = 'FirstGenerateMigrations1590422664469';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE `forms` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(150) NOT NULL, `description` text NULL, `shortDescription` text NULL, `enabled` tinyint NOT NULL DEFAULT 0, `publishedAt` timestamp NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `metaTitle` varchar(150) NULL, `metaDescription` varchar(150) NULL, `metaRobots` varchar(150) NULL, `metaYandex` varchar(150) NULL, `metaGooglebot` varchar(150) NULL, `metaGoogle` varchar(150) NULL, `metaGooglesiteverification` varchar(150) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `forms`', undefined);
  }
}
