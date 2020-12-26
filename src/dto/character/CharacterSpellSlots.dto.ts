import { ApiPropertyOptional } from "@nestjs/swagger";
import { CharacterSpellSlotsAtLevelDto } from "./CharacterSpellSlotsAtLevel.dto";
import { IsOptional, ValidateNested } from "class-validator";

export class CharacterSpellSlotsDto {
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  1: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  2: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  3: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  4: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  5: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  6: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  7: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  8: CharacterSpellSlotsAtLevelDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: CharacterSpellSlotsAtLevelDto })
  9: CharacterSpellSlotsAtLevelDto;
}
