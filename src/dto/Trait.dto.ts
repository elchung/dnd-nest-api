import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { OptionsDto } from "./Options.dto";
import { RaceDto } from "./races/Race.dto";
import { SubraceDto } from "./subraces/subrace.dto";

export class TraitDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  subraces: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  races: string[];

  @IsArray()
  @ApiProperty({ type: [String] })
  description: string[];

  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  proficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  proficiency_choices: OptionsDto[];
}
