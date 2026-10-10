import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class shopDTO {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    discount! : number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    price! : number

}