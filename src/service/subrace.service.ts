import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { SubraceDto } from "src/dto/subraces/Subrace.dto";
import { SubraceEntity } from "src/entity/subraces/Subrace.entity";

@Injectable()
export class SubraceService {
  constructor(
    @InjectRepository(SubraceEntity)
    private subraceRepository: Repository<SubraceEntity>
  ) {}

  async getSubraces(
    filters: Partial<SubraceDto>  // todo check if partial is correct
  ): Promise<any[]> {
    return await this.subraceRepository.find(
      // todo where filters
    );
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
