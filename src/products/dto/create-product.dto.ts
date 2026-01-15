import { IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  manufacturer: string;

  @IsOptional()
  @IsString()
  serialNumber?: string;

  @IsString()
  countryOrigin: string;

  @IsOptional()
  @IsString()
  description: string;
}
