import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InspectionBodiesService } from './inspection_bodies.service';
import { CreateInspectionBodyDto } from './dto/create-inspection_body.dto';
import { UpdateInspectionBodyDto } from './dto/update-inspection_body.dto';

@Controller('inspection-bodies')
export class InspectionBodiesController {
  constructor(
    private readonly inspectionBodiesService: InspectionBodiesService,
  ) {}

  @Post()
  create(@Body() createInspectionBodyDto: CreateInspectionBodyDto) {
    return this.inspectionBodiesService.create(createInspectionBodyDto);
  }

  @Get()
  findAll() {
    return this.inspectionBodiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inspectionBodiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateInspectionBodyDto: UpdateInspectionBodyDto,
  ) {
    return this.inspectionBodiesService.update(id, updateInspectionBodyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inspectionBodiesService.remove(id);
  }
}
