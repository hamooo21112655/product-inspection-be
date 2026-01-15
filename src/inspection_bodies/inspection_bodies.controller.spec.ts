import { Test, TestingModule } from '@nestjs/testing';
import { InspectionBodiesController } from './inspection_bodies.controller';
import { InspectionBodiesService } from './inspection_bodies.service';

describe('InspectionBodiesController', () => {
  let controller: InspectionBodiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InspectionBodiesController],
      providers: [InspectionBodiesService],
    }).compile();

    controller = module.get<InspectionBodiesController>(InspectionBodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
