import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
} from "class-validator";

export class LevelClassCreatingSpellSlotsDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  sorcery_point_cost: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slot_level: number;
}