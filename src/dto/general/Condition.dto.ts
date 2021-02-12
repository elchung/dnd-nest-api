import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsString, IsOptional } from "class-validator";

export class ConditionDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  description: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  source: string;
}
