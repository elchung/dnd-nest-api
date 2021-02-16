import { ApiTags } from "@nestjs/swagger";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { FeatureDto } from "../dto/features/Feature.dto";
import { FeatureService } from "../service/feature.service";

@ApiTags("feature")
@Controller("feature")
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Get("/:featureName")
  async getFeatureData(
    @Param("featureName") name: string
  ): Promise<FeatureDto> {
    return await this.featureService.getFeatureByName(name);
  }

  @Get()
  async getFeatures(
    @Param("filters") filters: Partial<FeatureDto>  // todo check if partial is correct
  ): Promise<FeatureDto[]> {
    return await this.featureService.getFeatures(filters);
  }

  @Put("/:featureName")
  async updateFeatureById(
    @Param("featureName") name: string,
    @Body() updatedFeature: FeatureDto
  ): Promise<void> {
    return await this.featureService.updateFeatureByName(
      name,
      updatedFeature
    );
  }

  @Post()
  async createFeature(@Body() newFeature: FeatureDto): Promise<void> {
    return await this.featureService.createFeature(newFeature);
  }

  @Delete("/:featureName")
  async deleteFeature(@Param("featureName") name: string): Promise<void> {
    return await this.featureService.deleteFeature(name);
  }
}
