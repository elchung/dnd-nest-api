import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SubclassEntity } from "src/entity/subclasses/Subclass.entity";
import { SubclassMapper } from "src/mapper/subclass.mapper";
import { Repository } from "typeorm";

import { SubclassDto } from "../dto/subclasses/Subclass.dto";

@Injectable()
export class SubclassService {
  constructor(
    @InjectRepository(SubclassEntity)
    private subclassRepository: Repository<SubclassEntity>
  ) {} 

  private subclassMapper = new SubclassMapper();

  async getAllSubclasses(): Promise<SubclassDto[]> {
    return (await this.subclassRepository.find()).map(subclassEntity => (this.subclassMapper.subclassEntityToDto(subclassEntity)));
  }

  async getSubclassByName(name: string): Promise<SubclassDto> {
    return this.subclassMapper.subclassEntityToDto(await this.subclassRepository.findOne({where: { name }}));
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
    await this.subclassRepository.save(this.subclassMapper.subclassDtoToEntity(newSubclass));
  }

  async deleteSubclass(name: string): Promise<void> {
    await this.subclassRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}

