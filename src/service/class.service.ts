import { ClassEntity } from "src/entity/classes/Class.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { ClassDto } from "../dto/class/Class.dto";

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassEntity)
    private classRepository: Repository<ClassEntity>
  ) {}

  async getClasses(filters: Partial<ClassDto>): Promise<any[]> {
    return await this.classRepository.find(
      //todo where: filters?
    );
  }

  async getClassByName(name: string): Promise<any> {
    return await this.classRepository.findOne({ where: { name } });
  }

  async updateClassByName(name: string, updatedClass: ClassDto): Promise<void> {
    await this.classRepository
      .createQueryBuilder()
      .update(ClassEntity)
      .set(updatedClass)
      .where("name = :name", { name: name })
      .execute();
  }

  async createClass(newClass: ClassDto): Promise<void> {
    await this.classRepository.save(newClass);
  }

  async deleteClass(name: string): Promise<void> {
    await this.classRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
