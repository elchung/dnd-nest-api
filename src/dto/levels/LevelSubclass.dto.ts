import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
} from "class-validator";

export class LevelSubclassDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  additional_magical_secrets_max_lvl: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  aura_range: number;
}