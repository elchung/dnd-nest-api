import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional } from "class-validator";

export class CharacterKnownSpellsDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  zero: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  one: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  two: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  three: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  four: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  five: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  six: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  seven: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  eight: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  nine: string[];
}
