import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';
import { Inspectorate } from '../enums/inspectorate.enum';
import { Jurisdiction } from '../enums/jurisdiction.enum';

@Entity()
export class InspectionBody {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Inspectorate,
  })
  inspectorate: Inspectorate;

  @Column({
    type: 'enum',
    enum: Jurisdiction,
  })
  jurisdiction: Jurisdiction;

  @Column()
  contactPerson: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
