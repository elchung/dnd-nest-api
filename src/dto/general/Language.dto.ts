import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString } from "class-validator";

export class LanguageDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  description: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  script: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  type: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  typicalSpeakers: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  source: string;
}
