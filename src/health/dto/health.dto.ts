import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class healthDTO {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    weight! : number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()   
    height! : number
}