import { IsEnum, IsString, Length, IsOptional } from 'class-validator';
import { Inspectorate } from '../enums/inspectorate.enum';
import { Jurisdiction } from '../enums/jurisdiction.enum';

export class CreateInspectionBodyDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsEnum(Inspectorate)
  inspectorate: Inspectorate;

  @IsEnum(Jurisdiction)
  jurisdiction: Jurisdiction;

  @IsString()
  @Length(1, 100)
  contactPerson: string;
}
