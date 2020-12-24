import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CharacterTreasureItemDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  id: number;

  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsNumber()
  @ApiProperty({ type: Number, default: 1 })
  quantity: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  weightInLbs: number;

  @IsBoolean()
  @ApiProperty({ type: Boolean, default: false })
  bookmarked: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, default: false })
  magical: boolean;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  description: string;
}
