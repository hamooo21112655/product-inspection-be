import { Module } from '@nestjs/common';
import { InspectionsService } from './inspections.service';
import { InspectionsController } from './inspections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inspection } from './entities/inspection.entity';
import { Product } from 'src/products/entities/product.entity';
import { InspectionBody } from 'src/inspection_bodies/entities/inspection_body.entity';
import { InspectionValidatorService } from './inspection-validator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inspection, Product, InspectionBody])],
  controllers: [InspectionsController],
  providers: [InspectionsService, InspectionValidatorService],
})
export class InspectionsModule {}
