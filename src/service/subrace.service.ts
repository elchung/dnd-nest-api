import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SubraceDto } from "src/dto/subraces/Subrace.dto";
import { SubraceEntity } from "src/entity/subraces/Subrace.entity";
import { Repository } from "typeorm";

@Injectable()
export class SubraceService {
  constructor(
    @InjectRepository(SubraceEntity)
    private subraceRepository: Repository<SubraceEntity>
  ) {}

  async getAllSubraces(): Promise<any[]> {
    return await this.subraceRepository.find();
  }

  async getSubraceByName(name: string): Promise<any> {
    return await this.subraceRepository.findOne({ where: { name } });
  }

  async updateSubraceByName(
    name: string,
    updatedSubrace: SubraceDto
  ): Promise<void> {
    await this.subraceRepository
      .createQueryBuilder()
      .update(SubraceEntity)
      .set(updatedSubrace)
      .where("name = :name", { name: name })
      .execute();
  }

  async createSubrace(newSubrace: SubraceDto): Promise<void> {
    await this.subraceRepository.save(newSubrace);
  }

  async deleteSubrace(name: string): Promise<void> {
    await this.subraceRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
