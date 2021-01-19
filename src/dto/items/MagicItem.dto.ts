import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString } from "class-validator";

export class MagicItemDto {
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
  name: string;
}
