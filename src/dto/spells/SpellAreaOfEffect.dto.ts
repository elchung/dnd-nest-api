import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SpellAreaOfEffectDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  size: number;

  @IsString()
  @ApiProperty({ type: String })
  type: string;
}
