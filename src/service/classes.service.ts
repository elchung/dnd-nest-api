import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ClassesDto } from "../dto/classes/Classes.dto";

@Injectable()
export class ClassesService {
  constructor() {} // private abilityScoreRepository: Repository<CharacterAbilityScoresEntity> // @InjectRepository(CharacterAbilityScoresEntity) // private characterDataRepository: Repository<CharacterDataEntity>, // @InjectRepository(CharacterDataEntity)

  // private characterMapper = new CharacterMapper();

  async getClassByName(name: string): Promise<any> {}

  async updateClassByName(
    name: string,
    updatedClass: ClassesDto
  ): Promise<any> {}

  async createClass(newClass: ClassesDto): Promise<any> {}

  async deleteClass(name: string): Promise<any> {}
}
