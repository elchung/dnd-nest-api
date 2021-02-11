import { InfoDto } from "src/dto/general/Info.dto";
import { OptionsDto } from "src/dto/general/Options.dto";
import { LevelOptionsDiceDto } from "src/dto/levels/LevelOptionsDice.dto";
import { InfoEntity } from "src/entity/general/Info.entity";
import { OptionsEntity } from "src/entity/general/Options.entity";
import { LevelOptionsDiceEntity } from "src/entity/levels/LevelOptionsDice.entity";
import {AbilityScoreBonusEntity} from "../entity/general/AbilityScoreBonus.entity";
import {AbilityScoreBonusDto} from "../dto/general/AbilityScoreBonus.dto";

export class CommonMapper {
  optionsDtoToEntity(optionsDto: OptionsDto): OptionsEntity {
    const optionsEntity = new OptionsEntity();
    optionsEntity.choose = optionsDto.choose;
    optionsEntity.from = optionsDto.from;

    return optionsEntity;
  }

  infoDtosToEntities(infoDtos: InfoDto[]): InfoEntity[] {
    return infoDtos.map(dto => this.infoDtoToEntity(dto));
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
  abilityBonusDtosToEntities(abilityBonusDtos: AbilityScoreBonusDto[]): AbilityScoreBonusEntity[] {
    return abilityBonusDtos.map(dto => this.abilityBonusDtoToEntity(dto))
  }

  abilityBonusDtoToEntity(abilityBonusDto: AbilityScoreBonusDto): AbilityScoreBonusEntity {
    const abilityBonusEntity = new AbilityScoreBonusEntity();
    abilityBonusEntity.name = abilityBonusDto.name;
    abilityBonusEntity.bonus = abilityBonusDto.bonus;

    return abilityBonusEntity;
  }
}
