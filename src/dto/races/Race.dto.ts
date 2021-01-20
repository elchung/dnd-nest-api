import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { AbilityScoreBonusDto } from "../general/AbilityScoreBonus.dto";
import { OptionsDto } from "../general/Options.dto";

export class RaceDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  speed: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [AbilityScoreBonusDto] })
  abilityBonuses: AbilityScoreBonusDto[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  abilityBonusOptions: OptionsDto[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  alignment: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  age: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  size: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  sizeDescription: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  startingProficiencies: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  startingProficiencyOptions: OptionsDto[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  languageDescription: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  languageOptions: OptionsDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  languages: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  subraces: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  traits: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  traitOptions: OptionsDto[];
}
