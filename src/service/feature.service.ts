import { FeatureDto } from "../dto/features/Feature.dto";
import { FeatureEntity } from "../entity/features/feature.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(FeatureEntity)
    private featureRepository: Repository<FeatureEntity>
  ) {}

  async getFeatures(
    filters: Partial<FeatureDto>  // todo check if partial is correct
  ): Promise<any[]> {
    return await this.featureRepository.find(
      //todo where filters
    );
  }

  async getFeatureByName(name: string): Promise<any> {
    return await this.featureRepository.findOne({ where: { name } });
  }

  async updateFeatureByName(name: string, updatedFeature: FeatureDto): Promise<void> {
    await this.featureRepository
      .createQueryBuilder()
      .update(FeatureEntity)
      .set(updatedFeature)
      .where("name = :name", { name: name })
      .execute();
  }

  async createFeature(newFeature: FeatureDto): Promise<void> {
    await this.featureRepository.save(newFeature);
  }

  async deleteFeature(name: string): Promise<void> {
    await this.featureRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
