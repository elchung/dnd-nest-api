import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional } from "class-validator";
import { AbilityScoreBonusDto } from "../AbilityScoreBonus.dto";

export class RaceDto {
  name: string;
  speed: number;
  ability_bonuses: AbilityScoreBonusDto[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: string[];
  starting_proficiency_options: 
}
