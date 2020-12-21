import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CharacterFeatureAndTraitDto {
  @ApiProperty({ type: Number })
  index: number;

  @ApiPropertyOptional({ type: String })
  title: string;

  @ApiPropertyOptional({ type: String })
  body: string;
}
