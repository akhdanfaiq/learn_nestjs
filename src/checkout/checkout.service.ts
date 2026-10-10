import { Injectable } from '@nestjs/common';
import { COUPON, Item, ShoppingBodyDTO, ShoppingQueryDto } from './dto/checkout.dto.js';

@Injectable()
export class CheckoutService {
  shoppingDiscount(queryDto: ShoppingQueryDto, bodyDto: ShoppingBodyDTO) {
    const memeber = queryDto?.member || false;
    const coupon = queryDto?.coupon;
    const items = bodyDto.items;

    const subtotal = items.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);

    const discount = memeber ? 0.05 : 0
    let voucher = 0
    if(coupon === COUPON.HEMAT10) voucher = 0.10
    if(coupon === COUPON.HEMAT20) voucher = 0.20

    const discountFee = (discount + voucher) * subtotal
    const grandTotal = subtotal - discountFee

    return{
        message: `Checkout Calculated`,
        data : {
            subtotal,
            memeber,
            coupon,
            discountFee,
            grandTotal
        }
    }
  }
}
