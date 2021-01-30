import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class SpellDcDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  dcSuccess: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  dcType: string;
}
