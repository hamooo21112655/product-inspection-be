import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './src/products/entities/product.entity';
import { InspectionBody } from './src/inspection_bodies/entities/inspection_body.entity';
import * as dotenv from 'dotenv';
import { Inspection } from 'src/inspections/entities/inspection.entity';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Product, InspectionBody, Inspection],

  // Migrations
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',

  // Safety settings
  synchronize: true,
  logging: true,
});
