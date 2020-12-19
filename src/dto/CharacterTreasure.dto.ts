import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {CharacterTreasureItemDto} from "./CharacterTreasureItemDto";
import {CharacterTreasureMoneyDto} from "./CharacterTreasureMoney.dto";

export class CharacterTreasureDto {
  @ApiProperty({ type: CharacterTreasureMoneyDto })
  money: CharacterTreasureMoneyDto;

  @ApiPropertyOptional({ type: [CharacterTreasureItemDto] })
  items: CharacterTreasureItemDto[];
}
