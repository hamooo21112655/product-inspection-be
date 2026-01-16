import { Module } from '@nestjs/common';
import { InspectionBodiesService } from './inspection_bodies.service';
import { InspectionBodiesController } from './inspection_bodies.controller';
import { InspectionBody } from './entities/inspection_body.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionBody])],
  controllers: [InspectionBodiesController],
  providers: [InspectionBodiesService],
})
export class InspectionBodiesModule {}
