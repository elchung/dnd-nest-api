import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { StartingEquipmentOptionChoicesDto } from "./StartingEquipmentOptionChoices.dto";

export class StartingEquipmentOptionsDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  choose: number;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [StartingEquipmentOptionChoicesDto] })
  from: StartingEquipmentOptionChoicesDto[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  type: string;
}
