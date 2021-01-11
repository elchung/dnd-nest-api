import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { OptionsDto } from "./Options.dto";
import { RaceDto } from "./races/Race.dto";
import { SubraceDto } from "./subraces/subrace.dto";

export class LanguageDto {
  @IsArray()
  @ApiProperty({ type: String })
  description: string;

  @IsArray()
  @ApiProperty({ type: String })
  script: string;

  @IsArray()
  @ApiProperty({ type: String })
  type: string;

  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  typical_speakers: [String]
}
