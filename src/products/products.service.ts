import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found!`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productUpdated = await this.productRepository.update(
      id,
      updateProductDto,
    );

    if (productUpdated.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found!`);
    }

    return { message: `Product with id ${id} updated successfully!` };
  }

  async remove(id: number) {
    const deletedProduct = await this.productRepository.delete(id);

    if (deletedProduct.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found!`);
    }

    return { message: `Product with id ${id} deleted successfully!` };
  }
}
