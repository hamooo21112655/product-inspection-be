import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inspection } from './entities/inspection.entity';
import { InspectionBody } from 'src/inspection_bodies/entities/inspection_body.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectRepository(Inspection)
    private readonly inspectionRepository: Repository<Inspection>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(InspectionBody)
    private readonly inspectionBodyRepository: Repository<InspectionBody>,
  ) {}

  async create(createInspectionDto: CreateInspectionDto) {
    const productExists = await this.productRepository.findOneBy({
      id: createInspectionDto.productId,
    });

    if (createInspectionDto.productId && !productExists) {
      throw new NotFoundException(
        "Can't reference product that doesn't exist!",
      );
    }

    const inspectionBodyExists = await this.inspectionBodyRepository.findOneBy({
      id: createInspectionDto.inspectionBodyId,
    });

    if (createInspectionDto.inspectionBodyId && !inspectionBodyExists) {
      throw new NotFoundException(
        "Can't reference inspection body that doesn't exist!",
      );
    }

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
    const productExists = await this.productRepository.findOneBy({
      id: updateInspectionDto.productId,
    });

    if (updateInspectionDto.productId && !productExists) {
      throw new NotFoundException(
        "Can't reference product that doesn't exist!",
      );
    }

    const inspectionBodyExists = await this.inspectionBodyRepository.findOneBy({
      id: updateInspectionDto.inspectionBodyId,
    });

    if (updateInspectionDto.inspectionBodyId && !inspectionBodyExists) {
      throw new NotFoundException(
        "Can't reference inspection body that doesn't exist!",
      );
    }

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
