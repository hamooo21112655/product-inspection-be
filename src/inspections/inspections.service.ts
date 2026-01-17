import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inspection } from './entities/inspection.entity';
import { InspectionBody } from 'src/inspection_bodies/entities/inspection_body.entity';
import { Product } from 'src/products/entities/product.entity';
import { InspectionValidatorService } from './inspection-validator.service';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectRepository(Inspection)
    private readonly inspectionRepository: Repository<Inspection>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(InspectionBody)
    private readonly inspectionBodyRepository: Repository<InspectionBody>,

    private readonly inspectionValidator: InspectionValidatorService,
  ) {}

  async create(createInspectionDto: CreateInspectionDto) {
    await this.inspectionValidator.validateProduct(
      createInspectionDto.productId,
    );
    await this.inspectionValidator.validateInspectionBody(
      createInspectionDto.inspectionBodyId,
    );
    this.inspectionValidator.validateInspectionDate(
      createInspectionDto.inspectionDate,
    );

    const inspectionBody =
      this.inspectionRepository.create(createInspectionDto);

    return this.inspectionRepository.save(inspectionBody);
  }

  async findAll() {
    return this.inspectionRepository.find();
  }

  async findOne(id: number) {
    const inspection = await this.inspectionRepository.findOneBy({ id });

    if (!inspection) {
      throw new NotFoundException(`Inspection with id ${id} not found!`);
    }

    return inspection;
  }

  async update(id: number, updateInspectionDto: UpdateInspectionDto) {
    await this.inspectionValidator.validateProduct(
      updateInspectionDto.productId,
    );
    await this.inspectionValidator.validateInspectionBody(
      updateInspectionDto.inspectionBodyId,
    );
    this.inspectionValidator.validateInspectionDate(
      updateInspectionDto.inspectionDate,
    );

    const result = await this.inspectionRepository.update(
      id,
      updateInspectionDto,
    );

    if (result.affected === 0) {
      throw new NotFoundException(`Inspection with id ${id} not found!`);
    }

    return { message: `Inspection with id ${id} updated successfully!` };
  }

  async remove(id: number) {
    const result = await this.inspectionRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Inspection with id ${id} not found!`);
    }

    return { message: `Inspection with id ${id} deleted successfully!` };
  }
}
