import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { InspectionBody } from '../../inspection_bodies/entities/inspection_body.entity';

@Entity()
export class Inspection {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.inspections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(() => InspectionBody, (body) => body.inspections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'inspectionBodyId' })
  inspectionBody: InspectionBody;

  @Column()
  inspectionBodyId: number;

  @Column({ type: 'date' })
  inspectionDate: string;

  @Column()
  result: string;

  @Column({ type: 'bool' })
  productSafe: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
