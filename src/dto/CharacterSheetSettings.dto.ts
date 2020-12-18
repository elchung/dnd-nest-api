import {ApiProperty} from '@nestjs/swagger';

export class CharacterSheetSettingsDto {
  @ApiProperty({ type: Boolean })
  abilityScoreOnTop: boolean;
}
