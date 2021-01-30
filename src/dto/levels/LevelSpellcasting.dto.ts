import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class LevelSpellcastingDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  cantripsKnown: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel1: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel2: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel3: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel4: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel5: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel6: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel7: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel8: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellSlotsLevel9: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  spellsKnown: number;
}
