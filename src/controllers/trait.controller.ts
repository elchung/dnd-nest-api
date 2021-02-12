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
import {TraitDto} from "../dto/general/Trait.dto";
import {TraitService} from "../service/trait.service";

@ApiTags("trait")
@Controller("trait")
export class TraitController {
  constructor(private readonly traitService: TraitService) {}

  @Get("/:traitName")
  async getTraitData(
    @Param("traitName") name: string
  ): Promise<TraitDto> {
    return await this.traitService.getTraitByName(name);
  }

  @Get()
  async getAllTraits(): Promise<TraitDto[]> {
    return await this.traitService.getAllTraits();
  }

  @Put("/:traitName")
  async updateTraitById(
    @Param("traitName") name: string,
    @Body() updatedTrait: TraitDto
  ): Promise<void> {
    return await this.traitService.updateTraitByName(
      name,
      updatedTrait
    );
  }

  @Post()
  async createTrait(@Body() newTrait: TraitDto): Promise<void> {
    return await this.traitService.createTrait(newTrait);
  }

  @Delete("/:traitName")
  async deleteTrait(@Param("traitName") name: string): Promise<void> {
    return await this.traitService.deleteTrait(name);
  }
}
