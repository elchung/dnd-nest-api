import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SpellDamageAtLevelDto {
  @IsString()
  @ApiProperty({ type: String })
  2: string;

  @IsString()
  @ApiProperty({ type: String })
  3: string;

  @IsString()
  @ApiProperty({ type: String })
  4: string;

  @IsString()
  @ApiProperty({ type: String })
  5: string;

  @IsString()
  @ApiProperty({ type: String })
  6: string;

  @IsString()
  @ApiProperty({ type: String })
  7: string;

  @IsString()
  @ApiProperty({ type: String })
  8: string;

  @IsString()
  @ApiProperty({ type: String })
  9: string;
}
