import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { LevelSpellcastingDto } from "./LevelSpellcasting.dto";
import { LevelSubclassDto } from "./LevelSubclass.dto";
import { LevelClassDto } from "./LevelClass.dto";

export class LevelDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  abilityScoreBonuses: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelClassDto })
  classSpecific: LevelClassDto;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  featureChoices: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  features: string[];

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  level: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  proficiencyBonus: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelSpellcastingDto })
  spellcasting: LevelSpellcastingDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  subclass: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelSubclassDto })
  subclassSpecific: LevelSubclassDto;
}
