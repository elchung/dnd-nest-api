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

export class ProficiencyDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @ApiProperty({ type: String })
  type: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  description: string;

  @IsArray()
}
