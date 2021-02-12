import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SubclassService } from "../service/subclass.service";
import { SubclassDto } from "../dto/subclasses/Subclass.dto";

@ApiTags("subclass")
@Controller("subclass")
export class SubclassController {
  constructor(private readonly subclassService: SubclassService) {}

  @Get("/:subclassName")
  async getSubclassData(
    @Param("subclassName") name: string
  ): Promise<SubclassDto> {
    return await this.subclassService.getSubclassByName(name);
  }

  @Get()
  async getAllSubclasses(): Promise<SubclassDto[]> {
    return await this.subclassService.getAllSubclasses();
  }

  @Put("/:subclassName")
  async updateSubclassById(
    @Param("subclassName") name: string,
    @Body() updatedSubclass: SubclassDto
  ): Promise<void> {
    return await this.subclassService.updateSubclassByName(
      name,
      updatedSubclass
    );
  }

  @Post()
  async createSubclass(@Body() newSubclass: SubclassDto): Promise<void> {
    return await this.subclassService.createSubclass(newSubclass);
  }

  @Delete("/:subclassName")
  async deleteSubclass(@Param("subclassName") name: string): Promise<void> {
    return await this.subclassService.deleteSubclass(name);
  }
}
