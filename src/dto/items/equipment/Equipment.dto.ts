import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { EquipmentArmorClassDto } from "./EquipmentArmorClass.dto";
import { EquipmentContentsDto } from "./EquipmentContents.dto";
import { EquipmentCostDto } from "./EquipmentCost.dto";
import { EquipmentDamageDto } from "./EquipmentDamage.dto";
import { EquipmentRangeDto } from "./EquipmentRange.dto";
import { EquipmentSpeedDto } from "./EquipmentSpeed.dto";

export class EquipmentDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  armorCategory: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentArmorClassDto })
  armorClass: EquipmentArmorClassDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  capacity: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  categoryRange: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentContentsDto })
  contents: EquipmentContentsDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentCostDto })
  cost: EquipmentCostDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentDamageDto })
  damage: EquipmentDamageDto;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  description: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  equipmentCategory: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  gearCategory: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  properties: string[];

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  quantity: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentRangeDto })
  range: EquipmentRangeDto;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  special: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentSpeedDto })
  speed: EquipmentSpeedDto;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  stealthDisadvantage: boolean;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  strMinimum: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentRangeDto })
  throwRange: EquipmentRangeDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  toolCategory: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentDamageDto })
  twoHandedDamage: EquipmentDamageDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  vehicleCategory: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  weaponCategory: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  weaponRange: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  weight: number;
}
