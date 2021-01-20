import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class LevelOptionsDiceDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  diceCount: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  diceValue: number;
}
