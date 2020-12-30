import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SpellDcDto {
  @IsString()
  @ApiProperty({ type: String })
  dc_success: string;

  @IsString()
  @ApiProperty({ type: String })
  dc_type: string;
}
