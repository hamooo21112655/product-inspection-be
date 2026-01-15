import { Injectable } from '@nestjs/common';
import { CreateInspectionBodyDto } from './dto/create-inspection_body.dto';
import { UpdateInspectionBodyDto } from './dto/update-inspection_body.dto';

@Injectable()
export class InspectionBodiesService {
  create(createInspectionBodyDto: CreateInspectionBodyDto) {
    return 'This action adds a new inspectionBody';
  }

  findAll() {
    return `This action returns all inspectionBodies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inspectionBody`;
  }

  update(id: number, updateInspectionBodyDto: UpdateInspectionBodyDto) {
    return `This action updates a #${id} inspectionBody`;
  }

  remove(id: number) {
    return `This action removes a #${id} inspectionBody`;
  }
}
