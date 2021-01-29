import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ClassesDto } from "../dto/classes/Classes.dto";
import { SubclassDto } from "../dto/subclasses/Subclass.dto";

@Injectable()
export class SubclassesService {
  constructor() {} // private abilityScoreRepository: Repository<CharacterAbilityScoresEntity> // @InjectRepository(CharacterAbilityScoresEntity) // private characterDataRepository: Repository<CharacterDataEntity>, // @InjectRepository(CharacterDataEntity)

  // private characterMapper = new CharacterMapper();

  async getSubclassByName(name: string): Promise<any> {}

  async updateSubclassByName(
    name: string,
    updatedClass: SubclassDto
  ): Promise<any> {}

  async createSubclass(newSubclass: SubclassDto): Promise<any> {}

  async deleteSubclass(name: string): Promise<any> {}
}
