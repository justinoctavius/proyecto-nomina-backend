import { MigrationInterface, QueryRunner } from 'typeorm';
import * as uuid from 'uuid';

export class RolesSeed1700103415192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'INSERT INTO roles (id, type, name) VALUES ($1, $2, $3)',
      [uuid.v4(), 'ADMIN', 'administrador'],
    );
    queryRunner.query(
      'INSERT INTO roles (id, type, name) VALUES ($1, $2, $3)',
      [uuid.v4(), 'EDITOR', 'editor'],
    );
    queryRunner.query(
      'INSERT INTO roles (id, type, name) VALUES ($1, $2, $3)',
      [uuid.v4(), 'READ_ONLY', 'solo lectura'],
    );
    queryRunner.query(
      'INSERT INTO roles (id, type, name) VALUES ($1, $2, $3)',
      [uuid.v4(), 'EMPLOYEE', 'empleado'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE FROM roles WHERE type = $1', ['ADMIN']);
    queryRunner.query('DELETE FROM roles WHERE type = $1', ['EDITOR']);
    queryRunner.query('DELETE FROM roles WHERE type = $1', ['READ_ONLY']);
    queryRunner.query('DELETE FROM roles WHERE type = $1', ['EMPLOYEE']);
  }
}
