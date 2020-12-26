import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CharacterTreasureItemDto } from "./CharacterTreasureItemDto";
import { CharacterTreasureMoneyDto } from "./CharacterTreasureMoney.dto";
import { IsArray, IsOptional, ValidateNested } from "class-validator";

export class CharacterTreasureDto {
  @ValidateNested()
  @ApiProperty({ type: CharacterTreasureMoneyDto })
  money: CharacterTreasureMoneyDto;

  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [CharacterTreasureItemDto] })
  items: CharacterTreasureItemDto[];
}
