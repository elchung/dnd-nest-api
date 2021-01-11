import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString, IsOptional, ValidateNested } from "class-validator";
import { OptionsDto } from "../Options.dto";
import { PrerequisiteDto } from "./prerequisite.dto";

export class FeatureDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  class?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  subclass?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  level: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  group?: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  description?: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [PrerequisiteDto] })
  prerequisites?: PrerequisiteDto[];

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: OptionsDto })
  choice: OptionsDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  reference?: string;
}
