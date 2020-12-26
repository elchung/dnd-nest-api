import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CharacterFeatureAndTraitDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  index: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  body: string;
}
