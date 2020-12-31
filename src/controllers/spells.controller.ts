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
import { SpellsService } from "../service/spells.service";
import { SpellsDto } from "../dto/spells/Spells.dto";

@ApiTags("5eSpells")
@Controller("5eSpells")
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  async getAllSpells(): Promise<SpellsDto[]> {
    return await this.spellsService.getAllSpells();
  }

  @Get("/names")
  async getAllSpellNames(): Promise<String[]> {
    return await this.spellsService.getAllSpellNames();
  }

  @Get("/:name")
  async getSpellWithName(@Param("name") name: string): Promise<SpellsDto> {
    return await this.spellsService.getSpellWithName(name);
  }

  @Get("/bulk")
  async getSpells(@Body() spellNames: string[]): Promise<SpellsDto[]> {
    return await this.spellsService.getSpells(spellNames);
  }

  @Put("/:name")
  async updateSpellWithName(
    @Param("name") name: string,
    @Body() spellDto: SpellsDto
  ): Promise<void> {
    await this.spellsService.updateSpellWithName(name, spellDto);
  }

  @Post()
  async createSpellWithName(
    @Body() spellDto: SpellsDto
  ): Promise<void> {
    await this.spellsService.createSpellWithName(spellDto);
  }

  @Delete("/:name")
  async deleteSpellWithName(@Param("name") name: string): Promise<void> {
    return await this.spellsService.deleteSpellWithName(name);
  }
}
