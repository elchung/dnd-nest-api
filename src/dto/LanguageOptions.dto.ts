import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional } from "class-validator";

export class LanguageOptionsDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  from: string[];

  @IsNumber()
  @ApiProperty({ type: Number })
  choose: number;
}
