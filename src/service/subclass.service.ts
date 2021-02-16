import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { SubclassEntity } from "src/entity/subclasses/Subclass.entity";

import { SubclassDto } from "../dto/subclasses/Subclass.dto";

@Injectable()
export class SubclassService {
  constructor(
    @InjectRepository(SubclassEntity)
    private subclassRepository: Repository<SubclassEntity>
  ) {}

  async getSubclasses(
    filters: Partial<SubclassDto>  // todo check if partial is correct
  ): Promise<any[]> {
    return await this.subclassRepository.find(
      // todo where filters
    );
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
