import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class StartingEquipmentOptionChoicesDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  equipment: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  quantity: number;
}
