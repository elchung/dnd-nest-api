import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional } from "class-validator";

export class CharacterKnownSpellsDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  0: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  1: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  2: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  3: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  4: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  5: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  6: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  7: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  8: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  9: string[];
}
