import { Body, Controller, Post } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { GeometryDTO } from './dto/geometry.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}
  @Post("circle-area")
  circleArea(@Body() dto:GeometryDTO){
    return this.geometryService.circleArea(dto)
  }
}

