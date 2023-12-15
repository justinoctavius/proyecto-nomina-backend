import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddingNullables1702607076180 implements MigrationInterface {
  name = 'AddingNullables1702607076180';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "positions" ALTER COLUMN "description" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "departments" ALTER COLUMN "description" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "departments" ALTER COLUMN "description" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "positions" ALTER COLUMN "description" SET NOT NULL`,
    );
  }
}
