import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'nomina',
  entities: ['dist/src/apps/**/*.entity{.js, .ts}'],
  migrations: ['dist/src/apps/**/migrations/*{.js, .ts}'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
