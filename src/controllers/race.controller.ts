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
import { RaceDto } from "src/dto/races/Race.dto";
import { RaceService } from "src/service/race.service";

@ApiTags("race")
@Controller("race")
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Get("/:raceName")
  async getRaceData(@Param("raceName") name: string): Promise<RaceDto> {
    return await this.raceService.getRaceByName(name);
  }

  @Get()
  async getRaces(
    @Param("filters") filters: Partial<RaceDto>  // todo check if partial is correct
  ): Promise<RaceDto[]> {
    return await this.raceService.getRaces(filters);
  }

  @Put("/:raceName")
  async updateRaceById(
    @Param("raceName") name: string,
    @Body() updatedRace: RaceDto
  ): Promise<void> {
    return await this.raceService.updateRaceByName(name, updatedRace);
  }

  @Post()
  async createRace(@Body() newRace: RaceDto): Promise<void> {
    return await this.raceService.createRace(newRace);
  }

  @Delete("/:raceName")
  async deleteRace(@Param("raceName") name: string): Promise<void> {
    return await this.raceService.deleteRace(name);
  }
}
