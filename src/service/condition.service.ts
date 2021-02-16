import { ConditionDto } from "../dto/general/Condition.dto";
import { ConditionEntity } from "../entity/general/Condition.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class ConditionService {
  constructor(
    @InjectRepository(ConditionEntity)
    private conditionRepository: Repository<ConditionEntity>
  ) {}

  async getConditions(
    filters: Partial<ConditionDto>  // todo check if partial is correct
  ): Promise<any[]> {
    return await this.conditionRepository.find(
      //todo where filters
    );
  }

  async getConditionByName(name: string): Promise<any> {
    return await this.conditionRepository.findOne({ where: { name } });
  }

  async updateConditionByName(name: string, updatedCondition: ConditionDto): Promise<void> {
    await this.conditionRepository
      .createQueryBuilder()
      .update(ConditionEntity)
      .set(updatedCondition)
      .where("name = :name", { name: name })
      .execute();
  }

  async createCondition(newCondition: ConditionDto): Promise<void> {
    await this.conditionRepository.save(newCondition);
  }

  async deleteCondition(name: string): Promise<void> {
    await this.conditionRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
