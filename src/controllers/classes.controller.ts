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
import { ClassesService } from "../service/classes.service";
import { ClassesDto } from "../dto/classes/Classes.dto";

@ApiTags("classes")
@Controller("classes")
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get("/:className")
  async getClassData(@Param("className") name: string): Promise<ClassesDto> {
    return await this.classesService.getClassByName(name);
  }

  @Put("/:className")
  async updateClassById(
    @Param("className") name: string,
    @Body() updatedClass: ClassesDto
  ): Promise<ClassesDto> {
    return await this.classesService.updateClassByName(name, updatedClass);
  }

  @Post()
  async createClass(@Body() newClass: ClassesDto): Promise<ClassesDto> {
    return await this.classesService.createClass(newClass);
  }

  @Delete("/:className")
  async deleteClass(@Param("className") name: string): Promise<void> {
    return await this.classesService.deleteClass(name);
  }
}
