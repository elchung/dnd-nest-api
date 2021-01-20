import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class LevelSpellcastingDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  cantrips_known: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_1: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_2: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_3: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_4: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_5: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_6: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_7: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_8: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spell_slots_level_9: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spells_known: number;
}
