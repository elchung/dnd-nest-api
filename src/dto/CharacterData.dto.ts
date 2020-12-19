import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {CharacterHitDiceDto} from "./CharacterHitDice.dto";
import {CharacterKnownSpellsDto} from "./CharacterKnownSpells.dto";
import {CharacterSheetSettingsDto} from "./CharacterSheetSettings.dto";
import {CharacterSpellSlotsDto} from "./CharacterSpellSlots.dto";
import {CharacterTreasureDto} from "./CharacterTreasure.dto";
import {CharacterFeatureAndTraitDto} from "./CharacterFeatureAndTraitDto";
import {CharacterAbilityScoresDto} from "./CharacterAbilityScores.dto";
import {CharacterDeathSavesDto} from "./CharacterDeathSaves.dto";

export class CharacterDataDto {
  @ApiProperty({ type: String })
  username: string;

  @ApiPropertyOptional({ type: String })
  characterName: string;

  @ApiPropertyOptional({ type: Number })
  level: number;

  @ApiPropertyOptional({ type: String })
  class: string;

  @ApiPropertyOptional({ type: String })
  background: string;

  @ApiPropertyOptional({ type: String })
  race: string;

  @ApiPropertyOptional({ type: String })
  spellcastingAbility: string;

  @ApiPropertyOptional({ type: Number })
  experience: number;

  @ApiPropertyOptional({ type: Number })
  proficiencyBonus: number;

  @ApiPropertyOptional({ type: Number })
  inspiration: number;

  @ApiPropertyOptional({ type: Number })
  armorClass: number;

  @ApiPropertyOptional({ type: Number })
  initiative: number;

  @ApiPropertyOptional({ type: Number })
  speed?: number;

  @ApiPropertyOptional({ type: Number })
  maxHp?: number;

  @ApiPropertyOptional({ type: Number })
  tempHp?: number;

  @ApiPropertyOptional({ type: Number })
  currentHp: number;

  @ApiPropertyOptional({ type: Number })
  hpHistory: number[];

  @ApiPropertyOptional({ type: String })
  skillProficiencies: string[];

  @ApiPropertyOptional({ type: String })
  savingThrowProficiencies: string[];

  @ApiPropertyOptional({ type: String })
  skillExpertise: string[];

  @ApiPropertyOptional({ type: String })
  generalProficiencies: string[];

  @ApiPropertyOptional({ type: String })
  knownLanguages: string[];

  @ApiPropertyOptional({ type: String })
  toolAndOtherProficiencies: string[];

  @ApiPropertyOptional({ type: String })
  preparedSpells: string[];

  @ApiPropertyOptional({ type: [CharacterHitDiceDto] })
  hitDice: CharacterHitDiceDto[];

  @ApiProperty({ type: CharacterAbilityScoresDto })
  abilityScores: CharacterAbilityScoresDto;

  @ApiProperty({ type: CharacterDeathSavesDto })
  deathSaves: CharacterDeathSavesDto;

  @ApiProperty({ type: CharacterKnownSpellsDto })
  knownSpells: CharacterKnownSpellsDto;

  @ApiProperty({ type: CharacterSpellSlotsDto })
  spellSlots: CharacterSpellSlotsDto

  @ApiPropertyOptional({ type: [CharacterFeatureAndTraitDto] })
  featuresAndTraits: CharacterFeatureAndTraitDto[];

  @ApiPropertyOptional({ type: CharacterTreasureDto })
  treasure: CharacterTreasureDto;

  @ApiPropertyOptional({ type: CharacterSheetSettingsDto })
  settings: CharacterSheetSettingsDto;
}
