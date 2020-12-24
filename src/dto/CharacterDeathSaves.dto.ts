import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CharacterDeathSavesDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  successes: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  failures: number;
}
