import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { InspectionBodiesModule } from './inspection_bodies/inspection_bodies.module';
import { InspectionsModule } from './inspections/inspections.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    InspectionBodiesModule,
    InspectionsModule,
  ],
})
export class AppModule {}
