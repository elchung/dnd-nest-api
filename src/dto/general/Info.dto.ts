import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsArray, IsOptional } from "class-validator";

export class InfoDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  description: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;
}
