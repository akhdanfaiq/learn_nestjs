import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class convertDTO {
    @IsNotEmpty()
    @IsNumber()
    @Max(1000000)
    @Min(0)
    meters!:number
}