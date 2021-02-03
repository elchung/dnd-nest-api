import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SubclassEntity } from "src/entity/subclasses/Subclass.entity";
import { Repository } from "typeorm";

import { SubclassDto } from "../dto/subclasses/Subclass.dto";

@Injectable()
export class SubclassService {
  constructor(
    @InjectRepository(SubclassEntity)
    private subclassRepository: Repository<SubclassEntity>
  ) {}

  async getAllSubclasses(): Promise<any[]> {
    return await this.subclassRepository.find();
  }

  async getSubclassByName(name: string): Promise<any> {
    return await this.subclassRepository.findOne({ where: { name } });
  }

  async updateSubclassByName(
    name: string,
    updatedSubclass: SubclassDto
  ): Promise<void> {
    await this.subclassRepository
      .createQueryBuilder()
      .update(SubclassEntity)
      .set(updatedSubclass)
      .where("name = :name", { name: name })
      .execute();
  }

  async createSubclass(newSubclass: SubclassDto): Promise<void> {
    await this.subclassRepository.save(newSubclass);
  }

  async deleteSubclass(name: string): Promise<void> {
    await this.subclassRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
