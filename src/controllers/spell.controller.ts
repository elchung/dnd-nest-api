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
import { SpellService } from "../service/spell.service";
import { SpellsDto } from "../dto/spells/Spells.dto";

@ApiTags("5eSpells")
@Controller("5eSpells")
export class SpellsController {
  constructor(private readonly spellsService: SpellService) {}

  @Get()
  async getSpells(
    @Param("filters") filters: Partial<SpellsDto>  // todo check if partial is correct
  ): Promise<SpellsDto[]> {
    return await this.spellsService.getSpells(filters);
  }

  @Get("/names")
  async getAllSpellNames(): Promise<string[]> {
    return await this.spellsService.getAllSpellNames();
  }

  @Get("/:name")
  async getSpellWithName(@Param("name") name: string): Promise<SpellsDto> {
    return await this.spellsService.getSpellWithName(name);
  }

  @Get("/bulk")
  async getSpellsByName(@Body() spellNames: string[]): Promise<SpellsDto[]> {
    return await this.spellsService.getSpellsByNames(spellNames);
  }

  @Put("/:name")
  async updateSpellWithName(
    @Param("name") name: string,
    @Body() spellDto: SpellsDto
  ): Promise<void> {
    await this.spellsService.updateSpellWithName(name, spellDto);
  }

  @Post()
  async createSpellWithName(@Body() spellDto: SpellsDto): Promise<void> {
    await this.spellsService.createSpellWithName(spellDto);
  }

  @Delete("/:name")
  async deleteSpellWithName(@Param("name") name: string): Promise<void> {
    return await this.spellsService.deleteSpellWithName(name);
  }
}
