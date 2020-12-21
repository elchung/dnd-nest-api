import {ApiPropertyOptional} from '@nestjs/swagger';
import {CharacterSpellSlotsAtLevelDto} from "./CharacterSpellSlotsAtLevel.dto";

export class CharacterSpellSlotsDto {
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  one: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  two: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  three: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  four: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  five: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  six: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  seven: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  eight: CharacterSpellSlotsAtLevelDto;

  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  nine: CharacterSpellSlotsAtLevelDto;

}
