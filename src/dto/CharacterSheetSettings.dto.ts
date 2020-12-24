import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class CharacterSheetSettingsDto {
  @IsBoolean()
  @ApiProperty({ type: Boolean })
  abilityScoreOnTop: boolean;
}
