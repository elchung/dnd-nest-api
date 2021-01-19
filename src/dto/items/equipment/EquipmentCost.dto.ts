import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class EquipmentCostDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  quantity: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  unit: string;
}