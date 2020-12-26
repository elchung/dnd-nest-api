import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CharacterTreasureMoneyDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  gold: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  silver: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  electrum: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  copper: number;
}
