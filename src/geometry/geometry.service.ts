import { Injectable } from '@nestjs/common';
import { GeometryDTO } from './dto/geometry.dto.js';

@Injectable()
export class GeometryService {
    circleArea(dto : GeometryDTO){
        const radius = dto.radius
        const area = Math.PI * radius **2;
        return{
            Message:"Circle Area has been counted", 
            area,
        }
    }
}
