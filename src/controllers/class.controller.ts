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
import { ClassService } from "../service/class.service";
import { ClassDto } from "../dto/class/Class.dto";

@ApiTags("classes")
@Controller("classes")
export class ClassController {
  constructor(private readonly classesService: ClassService) {}

  @Get("/:className")
  async getClassData(@Param("className") name: string): Promise<ClassDto> {
    return await this.classesService.getClassByName(name);
  }

  @Get()
  async getAllClasses(): Promise<ClassDto[]> {
    return await this.classesService.getAllClasses();
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
