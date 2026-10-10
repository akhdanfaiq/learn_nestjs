import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from "class-validator";

export class academicDTO {
    @IsNotEmpty()
    @IsNumber()
    @Max(100, {message :"Scroe tidak boleh lebih dari 100"})
    @Min(0, {message : "Score tidak boleh kurang dari 0"})
    score! : number


}