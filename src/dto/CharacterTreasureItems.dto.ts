import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterTreasureItemsDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number, default: 1 })
  quantity: number;

  @ApiPropertyOptional({ type: Number })
  weightInLbs: number;

  @ApiProperty({ type: Boolean, default: false })
  bookmarked: boolean;

  @ApiProperty({ type: Boolean, default: false })
  magical: boolean;

  @ApiPropertyOptional({ type: String })
  description: string;
}
