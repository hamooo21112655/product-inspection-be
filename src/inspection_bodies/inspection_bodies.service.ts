import { Injectable } from '@nestjs/common';
import { CreateInspectionBodyDto } from './dto/create-inspection_body.dto';
import { UpdateInspectionBodyDto } from './dto/update-inspection_body.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InspectionBody } from './entities/inspection_body.entity';

@Injectable()
export class InspectionBodiesService {
  constructor(
    @InjectRepository(InspectionBody)
    private readonly inspectionBodyRepository: Repository<InspectionBody>,
  ) {}

  async create(createInspectionBodyDto: CreateInspectionBodyDto) {
    const inspectionBody = this.inspectionBodyRepository.create(
      createInspectionBodyDto,
    );
    return this.inspectionBodyRepository.save(inspectionBody);
  }

  async findAll() {
    return this.inspectionBodyRepository.find();
  }

  async findOne(id: number) {
    return this.inspectionBodyRepository.findOneBy({ id });
  }

  async update(id: number, updateInspectionBodyDto: UpdateInspectionBodyDto) {
    const inspectionBodyUpdated = await this.inspectionBodyRepository.update(
      id,
      updateInspectionBodyDto,
    );
    return { message: `Inspection body with id ${id} updated successfully!` };
  }

  async remove(id: number) {
    const deletedInspectionBody =
      await this.inspectionBodyRepository.delete(id);
    return { message: `Inspection body with id ${id} deleted successfully!` };
  }
}
