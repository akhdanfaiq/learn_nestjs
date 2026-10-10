import { Body, Controller, Post } from '@nestjs/common';
import { AcademicService } from './academic.service.js';
import { academicDTO } from './dto/academic.dto.js';

@Controller('academic')
export class AcademicController {
  constructor(private readonly academicService: AcademicService) {}
  @Post("scoreGrade")
  scoreGrade (@Body()dto:academicDTO) {
    return this.academicService.scoreGrade(dto);
  }
}
