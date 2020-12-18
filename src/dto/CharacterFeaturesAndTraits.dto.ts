import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterFeaturesAndTraitsDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  index: number;

  @ApiPropertyOptional({ type: String })
  title: number;

  @ApiPropertyOptional({ type: String })
  body: number;
}
