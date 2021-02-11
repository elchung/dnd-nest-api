import { RaceDto } from "src/dto/races/Race.dto";
import { RaceEntity } from "src/entity/races/Race.entity";
import {CommonMapper} from "./common.mapper";

export class RaceMapper {
  private commonMapper = new CommonMapper();

  raceDtoToEntity(raceDto: RaceDto): RaceEntity {
    const raceEntity = new RaceEntity();
    raceEntity.name = raceDto.name;
    raceEntity.speed = raceDto.speed;
    raceEntity.alignment = raceDto.alignment;
    raceEntity.age = raceDto.age;
    raceEntity.size = raceDto.size;
    raceEntity.sizeDescription = raceDto.sizeDescription;
    raceEntity.languageDescription = raceDto.languageDescription;
    raceEntity.startingProficiencies = raceDto.startingProficiencies;
    raceEntity.languages = raceDto.languages;
    raceEntity.subraces = raceDto.subraces;
    raceEntity.traits = raceDto.traits;
    raceEntity.languageOptions = this.commonMapper.optionsDtoToEntity(raceDto.languageOptions);
    raceEntity.traitOptions = this.commonMapper.optionsDtoToEntity(raceDto.traitOptions);
    raceEntity.startingProficiencyOptions = this.commonMapper.optionsDtoToEntity(raceDto.startingProficiencyOptions);
    raceEntity.abilityBonusOptions = this.commonMapper.optionsDtoToEntity(raceDto.abilityBonusOptions);
    raceEntity.abilityBonuses = this.commonMapper.abilityBonusDtosToEntities(raceDto.abilityBonuses);

    return raceEntity;
  }

  raceEntityToDto(raceEntity: RaceEntity): RaceDto {
    const raceDto = new RaceDto();

    // todo fill in

    return raceDto;
  }
}
