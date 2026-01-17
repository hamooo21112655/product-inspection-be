import { Injectable, NotFoundException } from '@nestjs/common';
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
    const inspectionBody = await this.inspectionBodyRepository.findOneBy({
      id,
    });

    if (!inspectionBody) {
      throw new NotFoundException(`Inspection body with id ${id} not found!`);
    }

    return inspectionBody;
  }

  async update(id: number, updateInspectionBodyDto: UpdateInspectionBodyDto) {
    const inspectionBodyUpdated = await this.inspectionBodyRepository.update(
      id,
      updateInspectionBodyDto,
    );

    if (inspectionBodyUpdated.affected === 0) {
      throw new NotFoundException(`Inspection body with id ${id} not found!`);
    }

    return { message: `Inspection body with id ${id} updated successfully!` };
  }

  async remove(id: number) {
    const deletedInspectionBody =
      await this.inspectionBodyRepository.delete(id);

    if (!deletedInspectionBody) {
      throw new NotFoundException(`Inspection body with id ${id} not found!`);
    }

    return { message: `Inspection body with id ${id} deleted successfully!` };
  }
}
