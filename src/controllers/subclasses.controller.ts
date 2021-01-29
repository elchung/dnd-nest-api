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
import { SubclassesService } from "../service/subclasses.service";
import { SubclassDto } from "../dto/subclasses/Subclass.dto";

@ApiTags("subclasses")
@Controller("subclasses")
export class SubclassesController {
  constructor(private readonly subcassesService: SubclassesService) {}

  @Get("/:className")
  async getClassData(@Param("className") name: string): Promise<SubclassDto> {
    return await this.subcassesService.getSubclassByName(name);
  }

  @Put("/:className")
  async updateClassById(
    @Param("className") name: string,
    @Body() updatedSubclass: SubclassDto
  ): Promise<SubclassDto> {
    return await this.subcassesService.updateSubclassByName(
      name,
      updatedSubclass
    );
  }

  @Post()
  async createClass(@Body() newSubclass: SubclassDto): Promise<SubclassDto> {
    return await this.subcassesService.createSubclass(newSubclass);
  }

  @Delete("/:subclassName")
  async deleteClass(@Param("subclassName") name: string): Promise<void> {
    return await this.subcassesService.deleteSubclass(name);
  }
}
