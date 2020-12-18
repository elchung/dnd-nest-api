import { ApiProperty } from '@nestjs/swagger';

export class CharacterDeathSavesDto {
  @ApiProperty({ type: Number })
  successes: number;

  @ApiProperty({ type: Number })
  failures: number;
}
