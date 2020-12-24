import { ApiPropertyOptional } from "@nestjs/swagger";
import { CharacterSpellSlotsAtLevelDto } from "./CharacterSpellSlotsAtLevel.dto";
import { IsOptional, ValidateNested } from "class-validator";

export class CharacterSpellSlotsDto {
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  one: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  two: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  three: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  four: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  five: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  six: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  seven: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  eight: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  nine: CharacterSpellSlotsAtLevelDto;
}
