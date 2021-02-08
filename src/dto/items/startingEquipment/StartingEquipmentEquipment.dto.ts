import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsArray,
  IsNumber,
} from "class-validator";
import { StartingEquipmentOptionsDto } from "./StartingEquipmentOptions.dto";

export class StartingEquipmentEquipmentDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  equipment: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  quantity: number;
}
