import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class LevelClassCreatingSpellSlotsDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  sorceryPointCost: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotLevel: number;
}
