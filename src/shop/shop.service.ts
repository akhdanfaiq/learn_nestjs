import { Injectable } from '@nestjs/common';
import { dot } from 'node:test/reporters';
import { shopDTO } from './dto/shop.dto.js';

@Injectable()
export class ShopService {
  discount(dto: shopDTO) {
    const saved = dto.price * (dto.discount / 100);
    return {
      message: 'Discount calculated',
      data: {
        originalPrice: dto.price,
        discountPercent: dto.discount,
        savedAmount: Number(saved.toFixed(0)),
        finalPrice: Number((dto.price - saved).toFixed(0)),
      },
    };
  }
}
