import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CharacterAbilityScoresDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  strength?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  dexterity?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  constitution?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  intelligence?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  wisdom?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  charisma?: number;
}
