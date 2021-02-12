import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { InfoDto } from "../general/Info.dto";

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
  spellcastingAbility: string;
}
