import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { LanguageDto } from "../dto/general/Language.dto";
import { LanguageEntity } from "../entity/general/Language.entity";
import { Repository } from "typeorm";

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(LanguageEntity)
    private languageRepository: Repository<LanguageEntity>
  ) {}

  async getAllLanguages(): Promise<any[]> {
    return await this.languageRepository.find();
  }

  async getLanguageByName(name: string): Promise<any> {
    return await this.languageRepository.findOne({ where: { name } });
  }

  async updateLanguageByName(name: string, updatedLanguage: LanguageDto): Promise<void> {
    await this.languageRepository
      .createQueryBuilder()
      .update(LanguageEntity)
      .set(updatedLanguage)
      .where("name = :name", { name: name })
      .execute();
  }

  async createLanguage(newLanguage: LanguageDto): Promise<void> {
    await this.languageRepository.save(newLanguage);
  }

  async deleteLanguage(name: string): Promise<void> {
    await this.languageRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
