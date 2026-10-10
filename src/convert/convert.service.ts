import { Injectable } from '@nestjs/common';
import { convertDTO } from './dto/convert.dto.js';

@Injectable()
export class ConvertService {
    convertLength(dto:convertDTO){
        const meters = dto.meters
        const kilometers = meters / 1000
        const centimeters = meters * 100

        return {
            message: `Length has been converted`,
            data: {
                meters,
                kilometers,
                centimeters,
            },
        };
    }
}
