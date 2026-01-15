import { Test, TestingModule } from '@nestjs/testing';
import { InspectionBodiesService } from './inspection_bodies.service';

describe('InspectionBodiesService', () => {
  let service: InspectionBodiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InspectionBodiesService],
    }).compile();

    service = module.get<InspectionBodiesService>(InspectionBodiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
