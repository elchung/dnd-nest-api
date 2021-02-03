import { InfoDto } from "src/dto/general/Info.dto";
import { OptionsDto } from "src/dto/general/Options.dto";
import { LevelOptionsDiceDto } from "src/dto/levels/LevelOptionsDice.dto";
import { InfoEntity } from "src/entity/general/Info.entity";
import { OptionsEntity } from "src/entity/general/Options.entity";
import { LevelOptionsDiceEntity } from "src/entity/levels/LevelOptionsDice.entity";

export class CommonMapper {
  optionsDtoToEntity(optionsDto: OptionsDto): OptionsEntity {
    const optionsEntity = new OptionsEntity();
    optionsEntity.choose = optionsDto.choose;
    optionsEntity.from = optionsDto.from;

    return optionsEntity;
  }

  infoDtoToEntity(infoDto: InfoDto): InfoEntity {
    const infoEntity = new InfoEntity();
    infoEntity.description = infoDto.description;
    infoEntity.name = infoDto.name;

    return infoEntity;
  }

  levelOptionsDiceDtoToEntity(
    levelOptionsDiceDto: LevelOptionsDiceDto
  ): LevelOptionsDiceEntity {
    const levelOptionsDiceEntity = new LevelOptionsDiceEntity();
    levelOptionsDiceEntity.diceCount = levelOptionsDiceDto.diceCount;
    levelOptionsDiceEntity.diceValue = levelOptionsDiceDto.diceValue;

    return levelOptionsDiceEntity;
  }
}
