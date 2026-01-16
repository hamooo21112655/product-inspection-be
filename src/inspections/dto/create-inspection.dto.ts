import {
  IsInt,
  IsDateString,
  IsString,
  isBoolean,
  IsBoolean,
} from 'class-validator';

export class CreateInspectionDto {
  @IsInt()
  productId: number;

  @IsInt()
  inspectionBodyId: number;

  @IsDateString()
  inspectionDate: string;

  @IsString()
  result: string;

  @IsBoolean()
  productSafe: boolean;
}
