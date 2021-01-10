import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { RaceDto } from "./races/Race.dto";
import { SubraceDto } from "./subraces/subrace.dto";

export class TraitDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [SubraceDto] })
  subraces: SubraceDto[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [RaceDto] })
  races: RaceDto[];

  @IsArray()
  @ApiProperty({ type: [String] })
  description: string[];

  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  proficiencies: string[];
}
