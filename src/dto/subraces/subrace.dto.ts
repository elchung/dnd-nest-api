import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LanguageOptionsDto } from "../LanguageOptions.dto";
import { AbilityScoreBonusDto } from "../AbilityScoreBonus.dto";
import { RacialTraitOptionsDto } from "../RacialTraitOptions.dto";

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
  @ApiPropertyOptional({ type: [LanguageOptionsDto] })
  language_options: LanguageOptionsDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  racial_traits: string[]; //todo might want to expand from to be { name, description, etc } /api/traits/dwarven-toughness

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: RacialTraitOptionsDto })
  racial_trait_options: RacialTraitOptionsDto;
}
