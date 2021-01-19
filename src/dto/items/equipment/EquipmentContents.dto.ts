import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class EquipmentContentsDto {  
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  item: string;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  quantity: number;
}