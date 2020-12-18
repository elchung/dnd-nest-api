import {ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterAbilityScoresDto {
  @ApiPropertyOptional({ type: Number })
  strength?: number;

  @ApiPropertyOptional({ type: Number })
  dexterity?: number;

  @ApiPropertyOptional({ type: Number })
  constitution?: number;

  @ApiPropertyOptional({ type: Number })
  intelligence?: number;

  @ApiPropertyOptional({ type: Number })
  wisdom?: number;

  @ApiPropertyOptional({ type: Number })
  charisma?: number;
}
