import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CharacterSpellSlotsAtLevelDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  max: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  used: number;
}
