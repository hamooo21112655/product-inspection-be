import { IsEnum, IsString } from 'class-validator';
import { Inspectorate } from '../enums/inspectorate.enum';
import { Jurisdiction } from '../enums/jurisdiction.enum';

export class CreateInspectionBodyDto {
  @IsString()
  name: string;

  @IsEnum(Inspectorate)
  inspectorate: Inspectorate;

  @IsEnum(Jurisdiction)
  jurisdiction: Jurisdiction;

  @IsString()
  contactPerson: string;
}
