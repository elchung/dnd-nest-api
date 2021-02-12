import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class PrerequisiteDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  type?: string;
}
