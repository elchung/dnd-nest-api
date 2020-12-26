import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CharacterHitDiceDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  id?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  numDice?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  diceType?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  numUsed?: number;
}
