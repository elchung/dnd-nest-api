import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString, IsOptional, ValidateNested } from "class-validator";
import { AbilityScoreBonusDto } from "../AbilityScoreBonus.dto";
import { OptionsDto } from "../Options.dto";

export class RaceDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  speed: number;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [AbilityScoreBonusDto] })
  ability_bonuses: AbilityScoreBonusDto[];
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  ability_bonus_options: OptionsDto[];
  
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
  size_description: string;
  
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  starting_proficiencies: string[];
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  starting_proficiency_options: OptionsDto[];
  
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  language_description: String;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  language_options: OptionsDto[];
  
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
  trait_options: OptionsDto[];
}
