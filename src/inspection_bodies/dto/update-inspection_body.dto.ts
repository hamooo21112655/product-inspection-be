import { PartialType } from '@nestjs/mapped-types';
import { CreateInspectionBodyDto } from './create-inspection_body.dto';

export class UpdateInspectionBodyDto extends PartialType(CreateInspectionBodyDto) {}
