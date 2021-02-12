import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TraitDto } from "../dto/general/Trait.dto";
import { TraitEntity } from "../entity/general/Trait.entity";

@Injectable()
export class TraitService {
  constructor(
    @InjectRepository(TraitEntity)
    private traitRepository: Repository<TraitEntity>
  ) {}

  async getAllTraits(): Promise<any[]> {
    return await this.traitRepository.find();
  }

  async getTraitByName(name: string): Promise<any> {
    return await this.traitRepository.findOne({ where: { name } });
  }

  async updateTraitByName(name: string, updatedTrait: TraitDto): Promise<void> {
    await this.traitRepository
      .createQueryBuilder()
      .update(TraitEntity)
      .set(updatedTrait)
      .where("name = :name", { name: name })
      .execute();
  }

  async createTrait(newTrait: TraitDto): Promise<void> {
    await this.traitRepository.save(newTrait);
  }

  async deleteTrait(name: string): Promise<void> {
    await this.traitRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
