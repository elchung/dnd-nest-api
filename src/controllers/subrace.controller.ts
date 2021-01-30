import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SubraceDto } from "src/dto/subraces/Subrace.dto";
import { SubraceService } from "src/service/subrace.service";

@ApiTags("subrace")
@Controller("subrace")
export class SubraceController {
  constructor(private readonly subraceService: SubraceService) {}

  @Get("/:subraceName")
  async getSubraceData(@Param("subraceName") name: string): Promise<SubraceDto> {
    return await this.subraceService.getSubraceByName(name);
  }

  @Get()
  async getAllSubraces(): Promise<SubraceDto[]> {
    return await this.subraceService.getAllSubraces();
  }

  @Put("/:subraceName")
  async updateSubraceById(
    @Param("subraceName") name: string,
    @Body() updatedSubrace: SubraceDto
  ): Promise<void> {
    return await this.subraceService.updateSubraceByName(
      name,
      updatedSubrace
    );
  }

  @Post()
  async createSubrace(@Body() newSubrace: SubraceDto): Promise<void> {
    return await this.subraceService.createSubrace(newSubrace);
  }

  @Delete("/:subraceName")
  async deleteSubrace(@Param("subraceName") name: string): Promise<void> {
    return await this.subraceService.deleteSubrace(name);
  }
}
