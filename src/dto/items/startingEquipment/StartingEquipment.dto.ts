import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { StartingEquipmentEquipmentDto } from "./StartingEquipmentEquipment.dto";
import { StartingEquipmentOptionsDto } from "./StartingEquipmentOptions.dto";

export class StartingEquipmentDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [StartingEquipmentEquipmentDto] })
  startingEquipment: StartingEquipmentEquipmentDto[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: StartingEquipmentOptionsDto })
  startingEquipmentOptions: StartingEquipmentOptionsDto;
}
