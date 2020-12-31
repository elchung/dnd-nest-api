import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class SpellDcDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  dc_success: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  dc_type: string;
}
