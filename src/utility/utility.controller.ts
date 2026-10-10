import { Body, Controller, Post } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { utilityDTO } from './dto/utility.dto.js';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}
  @Post ("temperature")
  temperature (@Body() dto:utilityDTO){
    return this.utilityService.temperature(dto);
  }
}
