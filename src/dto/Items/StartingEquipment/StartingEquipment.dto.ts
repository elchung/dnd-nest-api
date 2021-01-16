import { ApiPropertyOptional } from "@nestjs/swagger";
import { ValidateNested, IsOptional, IsString, IsArray } from "class-validator";
import { StartingEquipmentOptionsDto } from "./StartingEquipmentOptions.dto";


export class StartingEquipmentDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  startingEquipment: string[];
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: StartingEquipmentOptionsDto })
  startingEquipmentOptions: StartingEquipmentOptionsDto;
}
