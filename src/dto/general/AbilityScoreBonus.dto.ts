import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, IsOptional } from "class-validator";

export class AbilityScoreBonusDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  name: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  bonus: number;
}
