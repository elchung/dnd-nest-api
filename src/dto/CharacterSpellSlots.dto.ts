import {ApiPropertyOptional} from '@nestjs/swagger';
import {CharacterSpellSlotsAtLevelDto} from "./CharacterSpellSlotsAtLevel.dto";

export class CharacterSpellSlotsDto {
  @ApiPropertyOptional({ type: Number })
  one: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  two: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  three: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  four: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  five: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  six: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  seven: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  eight: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: Number })
  nine: CharacterSpellSlotsAtLevelDto;

}
