import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class EquipmentDamageDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  damageDice: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  damageType: string;
}
