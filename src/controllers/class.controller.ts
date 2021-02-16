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
import { ClassDto } from "../dto/class/Class.dto";
import { ClassService } from "../service/class.service";

@ApiTags("classes")
@Controller("classes")
export class ClassController {
  constructor(private readonly classesService: ClassService) {}

  @Get("/:className")
  async getClassData(@Param("className") name: string): Promise<ClassDto> {
    return await this.classesService.getClassByName(name);
  }

  @Get()
  async getClasses(
    @Param("filters") filters: Partial<ClassDto>  // todo check if partial is correct
  ): Promise<ClassDto[]> {
    return await this.classesService.getClasses(filters);
  }

  @Put("/:className")
  async updateClassById(
    @Param("className") name: string,
    @Body() updatedClass: ClassDto
  ): Promise<void> {
    return await this.classesService.updateClassByName(name, updatedClass);
  }

  @Post()
  async createClass(@Body() newClass: ClassDto): Promise<void> {
    return await this.classesService.createClass(newClass);
  }

  @Delete("/:className")
  async deleteClass(@Param("className") name: string): Promise<void> {
    return await this.classesService.deleteClass(name);
  }
}
