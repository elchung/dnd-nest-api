import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LevelClassCreatingSpellSlotsDto } from "./LevelClassCreatingSpellSlots.dto";
import { LevelOptionsDiceDto } from "./LevelOptionsDice.dto";

export class LevelClassDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  actionSurges: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  arcaneRecoveryLevels: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  auraRange: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  bardicInspirationDie: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  brutalCriticalDice: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  channelDivinityCharges: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [LevelClassCreatingSpellSlotsDto] })
  creatingSpellSlots: LevelClassCreatingSpellSlotsDto[];

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  destroyUndeadCr: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  extraAttacks: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  favoredEnemies: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  favoredTerrain: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  indomitableUses: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  invocationsKnown: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  kiPoints: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  magicalSecretsMax5: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  magicalSecretsMax7: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  magicalSecretsMax9: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelOptionsDiceDto })
  martialArts: LevelOptionsDiceDto;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  metamagicKnown: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mysticArcanumLevel6: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mysticArcanumLevel7: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mysticArcanumLevel8: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mysticArcanumLevel9: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  rageCount: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  rageDamageBonus: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelOptionsDiceDto })
  sneakAttack: LevelOptionsDiceDto;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  songOfRestDie: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  sorceryPoints: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  unarmoredMovement: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  wildShapeFly: boolean;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  wildShapeMaxCr: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  wildShapeSwim: boolean;
}
