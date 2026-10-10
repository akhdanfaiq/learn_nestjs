import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { ShoppingBodyDTO, ShoppingQueryDto } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}
  @Post ('discount')
  shoppingDiscount(@Query() queryDto : ShoppingQueryDto, @Body() bodyDto: ShoppingBodyDTO){
    return this.checkoutService.shoppingDiscount(queryDto, bodyDto);
  }
}
