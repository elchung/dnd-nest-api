import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsArray, IsString, IsOptional } from "class-validator";
import { InfoDto } from "../Info.dto";

export class ClassSpellcastingDto {
  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [InfoDto] })
  info: InfoDto[];

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  level: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  spellcasting_ability: string;
}
