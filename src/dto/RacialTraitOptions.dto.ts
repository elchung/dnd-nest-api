import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional } from "class-validator";

export class RacialTraitOptionsDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  from: string[]; //todo might want to expand from to be { name, description, etc } /api/traits/dwarven-toughness

  @IsNumber()
  @ApiProperty({ type: Number })
  choose: number;
}
