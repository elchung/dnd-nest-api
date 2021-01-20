import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { SpellDamageAtLevelDto } from "./SpellDamageAtLevel.dto";

export class SpellDamageDto {
  @IsString()
  @ApiProperty({ type: String })
  type: string;

  @ValidateNested()
  @ApiProperty({ type: SpellDamageAtLevelDto })
  atLevel: SpellDamageAtLevelDto;
}
