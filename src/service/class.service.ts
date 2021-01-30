import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClassEntity } from "src/entity/classes/Class.entity";
import { ClassMapper } from "src/mapper/class.mapper";
import { Repository } from "typeorm";

import { ClassDto } from "../dto/class/Class.dto";

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassEntity)
    private classRepository: Repository<ClassEntity>,
  ) {}

  private classMapper = new ClassMapper();

  async getAllClasses(): Promise<ClassDto[]> {
    return (await this.classRepository.find()).map(classEntity => (this.classMapper.classEntityToDto(classEntity)));
  }

  async getClassByName(name: string): Promise<ClassDto> {
    return this.classMapper.classEntityToDto(await this.classRepository.findOne({where: { name }}));
  }

  async updateClassByName(
    name: string,
    updatedClass: ClassDto
  ): Promise<void> {
    await this.classRepository
      .createQueryBuilder()
      .update(ClassEntity)
      .set(updatedClass)
      .where("name = :name", { name: name })
      .execute();
  }

  async createClass(newClass: ClassDto): Promise<void> {
    await this.classRepository.save(this.classMapper.classDtoToEntity(newClass));
  }

  async deleteClass(name: string): Promise<void> {
    await this.classRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
