import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'proyeto-integrador.ccnlkjarljd5.us-east-1.rds.amazonaws.com',
  username: 'postgres',
  password: '8092310Justin',
  database: 'postgres',
  entities: ['dist/src/apps/**/*.entity{.js, .ts}'],
  migrations: ['dist/src/apps/**/migrations/*{.js, .ts}'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
