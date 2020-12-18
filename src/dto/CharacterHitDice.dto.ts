import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterHitDiceDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: Number })
  numDice?: number;

  @ApiPropertyOptional({ type: Number })
  diceType?: number;

  @ApiPropertyOptional({ type: Number })
  numUsed?: number;
}
