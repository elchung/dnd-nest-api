import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsArray,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { OptionsDto } from "../Options.dto";
import { ClassSpellcastingDto } from "./ClassSpellcasting.dto";

export class ClassesDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class_levels: string; // todo this is wrong

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  hit_die: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  proficiencies: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [OptionsDto] })
  proficiency_choices: OptionsDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  saving_throws: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: ClassSpellcastingDto })
  spellcasting: ClassSpellcastingDto;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  starting_equipment: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  subclasses: string[];
}