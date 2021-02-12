import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { SpellDamageDto } from "./SpellDamage.dto";
import { SpellDcDto } from "./SpellDc.dto";
import { SpellAreaOfEffectDto } from "./SpellAreaOfEffect.dto";

export class SpellsDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  description: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  higherLevel: string[];

  @IsString()
  @ApiProperty({ type: String })
  range: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  components: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  materials?: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean })
  ritual: boolean;

  @IsString()
  @ApiProperty({ type: String })
  duration: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean })
  concentration: boolean;

  @IsString()
  @ApiProperty({ type: String })
  castingTime: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  level: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  attackType?: string;

  @IsString()
  @ApiProperty({ type: String })
  school: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  classes?: string[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: SpellDamageDto })
  damage?: SpellDamageDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: SpellDcDto })
  dc?: SpellDcDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: SpellAreaOfEffectDto })
  areaOfEffect?: SpellAreaOfEffectDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  source: string;
}
