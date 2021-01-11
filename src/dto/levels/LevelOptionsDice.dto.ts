import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
} from "class-validator";

export class LevelOptionsDiceDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  dice_count: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  dice_value: number;
}