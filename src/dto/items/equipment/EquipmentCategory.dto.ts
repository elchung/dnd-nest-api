import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString } from "class-validator";

export class EquipmentDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  equipment: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;
}
