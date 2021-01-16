import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString, IsBoolean, ValidateNested } from "class-validator";
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
  armor_category: string;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentArmorClassDto })
  armor_class: EquipmentArmorClassDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  capacity: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  category_range: string;
  
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
  equipment_category: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  gear_category: string;

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
  stealth_disadvantage: boolean;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  str_minimum: number;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentRangeDto })
  throw_range: EquipmentRangeDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  tool_category: string;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: EquipmentDamageDto })
  two_handed_damage: EquipmentDamageDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  vehicle_category: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  weapon_category: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  weapon_range: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  weight: number;
}
