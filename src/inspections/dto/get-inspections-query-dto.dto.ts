import { IsInt, IsOptional, IsDateString, Min } from 'class-validator';

export class GetInspectionsQueryDto {
  @IsInt()
  inspectionBodyId: number;

  @IsOptional()
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
