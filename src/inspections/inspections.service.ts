import { Injectable } from '@nestjs/common';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inspection } from './entities/inspection.entity';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectRepository(Inspection)
    private readonly inspectionRepository: Repository<Inspection>,
  ) {}

  async create(createInspectionDto: CreateInspectionDto) {
    const inspectionBody =
      this.inspectionRepository.create(createInspectionDto);
    return this.inspectionRepository.save(inspectionBody);
  }

  async findAll() {
    return this.inspectionRepository.find();
  }

  async findOne(id: number) {
    return this.inspectionRepository.findOneBy({ id });
  }

  async update(id: number, updateInspectionDto: UpdateInspectionDto) {
    const inspectionUpdated = await this.inspectionRepository.update(
      id,
      updateInspectionDto,
    );
    return { message: `Inspection with id ${id} updated successfully!` };
  }

  async remove(id: number) {
    const deletedInspection = await this.inspectionRepository.delete(id);
    return { message: `Inspection with id ${id} deleted successfully!` };
  }
}
