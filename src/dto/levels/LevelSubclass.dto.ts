import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class LevelSubclassDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  additionalMagicalSecretsMaxLvl: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  auraRange: number;
}
