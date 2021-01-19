import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsArray,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { OptionsDto } from "../general/Options.dto";
import { ClassSpellcastingDto } from "./ClassSpellcasting.dto";

export class ClassesDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  classLevels: string; // todo this is wrong

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  hitDie: number;

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
  proficiencyChoices: OptionsDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  savingThrows: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: ClassSpellcastingDto })
  spellcasting: ClassSpellcastingDto;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  startingEquipment: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  subclasses: string[];
}
