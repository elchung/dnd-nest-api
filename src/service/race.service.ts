import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { RaceDto } from "src/dto/races/Race.dto";
import { RaceEntity } from "src/entity/races/Race.entity";
import { Repository } from "typeorm";

@Injectable()
export class RaceService {
  constructor(
    @InjectRepository(RaceEntity)
    private raceRepository: Repository<RaceEntity>
  ) {}

  async getRaces(
    filters: Partial<RaceDto>  // todo check if partial is correct
  ): Promise<any[]> {
    return await this.raceRepository.find(
      //todo where filters
    );
  }

  async getRaceByName(name: string): Promise<any> {
    return await this.raceRepository.findOne({ where: { name } });
  }

  async updateRaceByName(name: string, updatedRace: RaceDto): Promise<void> {
    await this.raceRepository
      .createQueryBuilder()
      .update(RaceEntity)
      .set(updatedRace)
      .where("name = :name", { name: name })
      .execute();
  }

  async createRace(newRace: RaceDto): Promise<void> {
    await this.raceRepository.save(newRace);
  }

  async deleteRace(name: string): Promise<void> {
    await this.raceRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
