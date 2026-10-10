import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, Min, MinLength, ValidateNested } from "class-validator";

export enum COUPON {
    HEMAT10 = 'HEMAT10',
    HEMAT20 = 'HEMAT20',
    FREESHIP = 'FREESHIP'
}

export class ShoppingQueryDto {
    @IsOptional()
    @IsBoolean()
    member?: boolean

    @IsEnum(COUPON)
    @IsOptional()
    coupon! : COUPON
}

export class ShoppingBodyDTO{
    @IsArray()
    @ArrayMaxSize(20)
    @ArrayMinSize(1)
    @ValidateNested({each: true})
    @Type(()=> Item)
    items: Item[]
}

export class Item {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name!: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Min(0)
    price!: number

    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    @Min(1)
    qty!: number 
}