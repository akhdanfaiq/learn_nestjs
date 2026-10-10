import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export enum TemperatureUnit {
    CELSIUS = 'CELSIUS',
    FAHRENHEIT = 'FAHRENHEIT'
}

export class utilityDTO {
    @IsNotEmpty()
    @IsNumber()
    value! : number
    @IsNotEmpty()
    @IsEnum(TemperatureUnit)
    from! : TemperatureUnit

    @IsNotEmpty()
    @IsEnum(TemperatureUnit)
    to! : TemperatureUnit
}