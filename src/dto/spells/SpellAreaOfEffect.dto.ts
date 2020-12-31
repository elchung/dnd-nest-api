import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, IsOptional } from "class-validator";

export class SpellAreaOfEffectDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  size?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  type?: string;
}
