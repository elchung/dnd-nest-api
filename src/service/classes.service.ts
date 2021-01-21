import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CharacterDataEntity } from "../entity/character/CharacterData.entity";
import { CharacterAbilityScoresEntity } from "../entity/character/CharacterAbilityScores.entity";
import { CharacterMapper } from "../mapper/character.mapper";
import { ClassesDto } from "../dto/classes/Classes.dto";

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(CharacterDataEntity)
    // private characterDataRepository: Repository<CharacterDataEntity>,

    @InjectRepository(CharacterAbilityScoresEntity)
    // private abilityScoreRepository: Repository<CharacterAbilityScoresEntity>
  ) {}

  private characterMapper = new CharacterMapper();

  async getClassByName(name: string): Promise<any> {}

  async updateClassByName(
    name: string,
    updatedClass: ClassesDto
  ): Promise<any> {}

  async createClass(newClass: ClassesDto): Promise<any> {}

  async deleteClass(name: string): Promise<any> {}
}
