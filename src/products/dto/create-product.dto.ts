import { IsString, IsOptional, Length, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 50)
  manufacturer: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  serialNumber?: string;

  @IsString()
  @Length(1, 50)
  countryOrigin: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}
