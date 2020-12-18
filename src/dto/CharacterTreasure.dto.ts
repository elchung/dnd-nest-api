import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {CharacterTreasureItemsDto} from "./CharacterTreasureItems.dto";
import {CharacterTreasureMoneyDto} from "./CharacterTreasureMoney.dto";

export class CharacterTreasureDto {
  @ApiProperty({ type: CharacterTreasureMoneyDto })
  money: CharacterTreasureMoneyDto;

  @ApiPropertyOptional({ type: [CharacterTreasureItemsDto] })
  items: CharacterTreasureItemsDto[];
}
