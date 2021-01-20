import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class SpellDamageAtLevelDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  1?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  2?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  3?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  4?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  5?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  6?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  7?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  8?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  9?: string;
}
