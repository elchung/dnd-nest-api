import { RaceDto } from "src/dto/races/Race.dto";
import { RaceEntity } from "src/entity/races/Race.entity";

export class RaceMapper {
  raceDtoToEntity(raceDto: RaceDto): RaceEntity {
    const raceEntity = new RaceEntity();

    // todo fill in

    return raceEntity;
  }

  raceEntityToDto(raceEntity: RaceEntity): RaceDto {
    const raceDto = new RaceDto();

    // todo fill in

    return raceDto;
  }
}
