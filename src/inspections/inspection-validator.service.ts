import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { InspectionBody } from '../inspection_bodies/entities/inspection_body.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InspectionValidatorService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(InspectionBody)
    private readonly inspectionBodyRepository: Repository<InspectionBody>,
  ) {}

  async validateProduct(productId: number | undefined) {
    if (!productId) return;

    const productExists = await this.productRepository.findOneBy({
      id: productId,
    });

    if (!productExists) {
      throw new NotFoundException(
        "Can't reference product that doesn't exist!",
      );
    }
  }

  async validateInspectionBody(inspectionBodyId: number | undefined) {
    if (!inspectionBodyId) return;

    const inspectionBodyExists = await this.inspectionBodyRepository.findOneBy({
      id: inspectionBodyId,
    });

    if (!inspectionBodyExists) {
      throw new NotFoundException(
        "Can't reference inspection body that doesn't exist!",
      );
    }
  }

  validateInspectionDate(inspectionDate: string | undefined) {
    if (!inspectionDate) return;

    const date = new Date(inspectionDate);
    const today = new Date();

    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (date > today) {
      throw new BadRequestException("Inspection date can't be in the future!");
    }
  }
}
