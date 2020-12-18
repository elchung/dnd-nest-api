import {ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterSpellSlotsAtLevelDto {
  @ApiPropertyOptional({ type: Number })
  max: number;

  @ApiPropertyOptional({ type: Number })
  used: number;
}
