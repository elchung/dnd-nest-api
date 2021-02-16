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
import { LanguageDto } from "../dto/general/Language.dto";
import { LanguageService } from "../service/language.service";

@ApiTags("language")
@Controller("language")
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get("/:languageName")
  async getLanguageData(
    @Param("languageName") name: string
  ): Promise<LanguageDto> {
    return await this.languageService.getLanguageByName(name);
  }

  @Get()
  async getLanguages(): Promise<LanguageDto[]> {
    return await this.languageService.getLanguages();
  }

  @Put("/:languageName")
  async updateLanguageById(
    @Param("languageName") name: string,
    @Body() updatedLanguage: LanguageDto
  ): Promise<void> {
    return await this.languageService.updateLanguageByName(
      name,
      updatedLanguage
    );
  }

  @Post()
  async createLanguage(@Body() newLanguage: LanguageDto): Promise<void> {
    return await this.languageService.createLanguage(newLanguage);
  }

  @Delete("/:languageName")
  async deleteLanguage(@Param("languageName") name: string): Promise<void> {
    return await this.languageService.deleteLanguage(name);
  }
}
