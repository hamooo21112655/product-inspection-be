import {
  IsInt,
  IsDateString,
  IsString,
  IsBoolean,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateInspectionDto {
  @IsInt()
  @Min(1)
  productId: number;

  @IsInt()
  @Min(1)
  inspectionBodyId: number;

  @IsDateString()
  inspectionDate: string;

  @IsString()
  @MaxLength(255)
  result: string;

  @IsBoolean()
  productSafe: boolean;
}
