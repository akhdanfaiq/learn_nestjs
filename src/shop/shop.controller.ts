import { Body, Controller, Post } from '@nestjs/common';
import { ShopService } from './shop.service.js';
import { shopDTO } from './dto/shop.dto.js';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}
  @Post('discount')
  discount(@Body() dto: shopDTO) {
    return this.shopService.discount(dto);
  }
}
