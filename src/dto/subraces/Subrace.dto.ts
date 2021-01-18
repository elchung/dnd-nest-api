import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { OptionsDto } from "../Options.dto";
import { AbilityScoreBonusDto } from "../AbilityScoreBonus.dto";
import { TraitDto } from "../Trait.dto";

export class SubraceDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @ApiProperty({ type: String })
  race: string;

  @IsString()
  @ApiProperty({ type: String })
  description: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [AbilityScoreBonusDto] })
  ability_score_bonuses: AbilityScoreBonusDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  starting_proficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  languages: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  language_options: OptionsDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  racial_traits: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: OptionsDto })
  racial_trait_options: OptionsDto;
}
