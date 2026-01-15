import { Module } from '@nestjs/common';
import { InspectionBodiesService } from './inspection_bodies.service';
import { InspectionBodiesController } from './inspection_bodies.controller';

@Module({
  controllers: [InspectionBodiesController],
  providers: [InspectionBodiesService],
})
export class InspectionBodiesModule {}
