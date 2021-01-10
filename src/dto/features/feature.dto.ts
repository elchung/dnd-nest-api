import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString, IsOptional } from "class-validator";
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
  @ApiProperty({ type: Number })
  level: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  group?: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  description?: string[];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [PrerequisiteDto] })
  prerequisites?: PrerequisiteDto[];
}