import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class ProficiencyDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @ApiProperty({ type: String })
  type: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  description: string;
}
