import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RaceDto } from "src/dto/races/Race.dto";
import { RaceEntity } from "src/entity/races/Race.entity";
import { RaceMapper } from "src/mapper/race.mapper";
import { Repository } from "typeorm";

@Injectable()
export class RaceService {
  constructor(
    @InjectRepository(RaceEntity)
    private raceRepository: Repository<RaceEntity>,
  ) {}

  private raceMapper = new RaceMapper();

  async getAllRaces(): Promise<RaceDto[]> {
    return (await this.raceRepository.find()).map(raceEntity => (this.raceMapper.raceEntityToDto(raceEntity)));
  }

  async getRaceByName(name: string): Promise<RaceDto> {
    return this.raceMapper.raceEntityToDto(await this.raceRepository.findOne({where: { name }}));
  }

  async updateRaceByName(
    name: string,
    updatedRace: RaceDto
  ): Promise<void> {
    await this.raceRepository
      .createQueryBuilder()
      .update(RaceEntity)
      .set(updatedRace)
      .where("name = :name", { name: name })
      .execute();
  }

  async createRace(newRace: RaceDto): Promise<void> {
    await this.raceRepository.save(this.raceMapper.raceDtoToEntity(newRace));
  }

  async deleteRace(name: string): Promise<void> {
    await this.raceRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
