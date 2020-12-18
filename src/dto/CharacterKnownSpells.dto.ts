import {ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterKnownSpellsDto {
  @ApiPropertyOptional({ type: [String] })
  zero: string[];

  @ApiPropertyOptional({ type: [String] })
  one: string[];

  @ApiPropertyOptional({ type: [String] })
  two: string[];

  @ApiPropertyOptional({ type: [String] })
  three: string[];

  @ApiPropertyOptional({ type: [String] })
  four: string[];

  @ApiPropertyOptional({ type: [String] })
  five: string[];

  @ApiPropertyOptional({ type: [String] })
  six: string[];

  @ApiPropertyOptional({ type: [String] })
  seven: string[];

  @ApiPropertyOptional({ type: [String] })
  eight: string[];

  @ApiPropertyOptional({ type: [String] })
  nine: string[];
}
