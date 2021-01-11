import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsString,
  IsArray,
  IsOptional,
} from "class-validator";

export class InfoDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  desc: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;
}