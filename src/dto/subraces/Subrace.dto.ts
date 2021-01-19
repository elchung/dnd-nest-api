import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { OptionsDto } from "../general/Options.dto";
import { AbilityScoreBonusDto } from "../general/AbilityScoreBonus.dto";
import { TraitDto } from "../general/Trait.dto";

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
  abilityScoreBonuses: AbilityScoreBonusDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  startingProficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  languages: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  languageOptions: OptionsDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  racialTraits: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: OptionsDto })
  racialTraitOptions: OptionsDto;
}
