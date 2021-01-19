import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LevelSpellcastingDto } from "./LevelSpellcasting.dto";
import { LevelSubclassDto } from "./LevelSubclass.dto";
import { LevelClassDto } from "./LevelClass.dto";

export class SubraceDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  ability_score_bonuses: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelClassDto })
  class_specific: LevelClassDto;
  
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  feature_choices: string[];
  
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  features: string[]

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  level: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  proficiency_bonus: number;

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
  subclass_specific: LevelSubclassDto;
}
