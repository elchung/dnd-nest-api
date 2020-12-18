import {ApiProperty} from '@nestjs/swagger';

export class CharacterTreasureMoneyDto {
  @ApiProperty({ type: Number })
  gold: number;

  @ApiProperty({ type: Number })
  silver: number;

  @ApiProperty({ type: Number })
  electrum: number;

  @ApiProperty({ type: Number })
  copper: number;
}
