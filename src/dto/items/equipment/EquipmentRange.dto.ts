import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class EquipmentRangeDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  long: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  normal: number;
}
