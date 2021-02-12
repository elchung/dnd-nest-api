import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class EquipmentArmorClassDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  base: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  dexBonus: boolean;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  maxBonus: number;
}
