import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CharacterHitDiceDto } from "./CharacterHitDice.dto";
import { CharacterKnownSpellsDto } from "./CharacterKnownSpells.dto";
import { CharacterSheetSettingsDto } from "./CharacterSheetSettings.dto";
import { CharacterSpellSlotsDto } from "./CharacterSpellSlots.dto";
import { CharacterTreasureDto } from "./CharacterTreasure.dto";
import { CharacterFeatureAndTraitDto } from "./CharacterFeatureAndTraitDto";
import { CharacterAbilityScoresDto } from "./CharacterAbilityScores.dto";
import { CharacterDeathSavesDto } from "./CharacterDeathSaves.dto";
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

export class CharacterDataDto {
  @IsString()
  @ApiProperty({ type: String })
  username: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  characterName?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  level?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  background?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  race?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  spellcastingAbility?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  experience?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  proficiencyBonus?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  inspiration?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  armorClass?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  initiative?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  speed?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  maxHp?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  tempHp?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  currentHp: number;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [Number] })
  hpHistory: number[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  skillProficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  savingThrowProficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  skillExpertise: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  generalProficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  knownLanguages: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  toolAndOtherProficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  preparedSpells: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [CharacterHitDiceDto] })
  hitDice: CharacterHitDiceDto[];

  @ValidateNested()
  @IsOptional()
  @ApiProperty({ type: CharacterAbilityScoresDto })
  abilityScores: CharacterAbilityScoresDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({ type: CharacterDeathSavesDto })
  deathSaves: CharacterDeathSavesDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({ type: CharacterKnownSpellsDto })
  knownSpells: CharacterKnownSpellsDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({ type: CharacterSpellSlotsDto })
  spellSlots: CharacterSpellSlotsDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [CharacterFeatureAndTraitDto] })
  featuresAndTraits?: CharacterFeatureAndTraitDto[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterTreasureDto })
  treasure?: CharacterTreasureDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSheetSettingsDto })
  settings?: CharacterSheetSettingsDto;
}
