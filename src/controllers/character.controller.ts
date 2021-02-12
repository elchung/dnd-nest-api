import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CharacterDataDto } from "../dto/character/CharacterData.dto";
import { CharacterService } from "../service/character.service";
import { CharacterDeathSavesDto } from "../dto/character/CharacterDeathSaves.dto";
import { CharacterKnownSpellsDto } from "../dto/character/CharacterKnownSpells.dto";
import { CharacterAbilityScoresDto } from "../dto/character/CharacterAbilityScores.dto";
import { CharacterFeatureAndTraitDto } from "../dto/character/CharacterFeatureAndTraitDto";
import { CharacterSpellSlotsDto } from "../dto/character/CharacterSpellSlots.dto";
import { CharacterSpellSlotsAtLevelDto } from "../dto/character/CharacterSpellSlotsAtLevel.dto";
import { CharacterTreasureMoneyDto } from "../dto/character/CharacterTreasureMoney.dto";
import { CharacterTreasureItemDto } from "../dto/character/CharacterTreasureItemDto";
import { CharacterSheetSettingsDto } from "../dto/character/CharacterSheetSettings.dto";
import { CharacterHitDiceDto } from "../dto/character/CharacterHitDice.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("character")
@Controller("character")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get("/:characterId")
  async getCharacterById(
    @Param("characterId") characterId: string
  ): Promise<CharacterDataDto> {
    return await this.characterService.getCharacterById(characterId);
  }

  @Get("/user/:username")
  async getCharactersByUsername(
    @Param("username") username: string
  ): Promise<number[]> {
    return await this.characterService.getCharactersByUsername(username);
  }

  @Post()
  async createCharacter(
    @Body() characterDataDto: CharacterDataDto
  ): Promise<CharacterDataDto> {
    return await this.characterService.createCharacter(characterDataDto);
  }

  @Put("/:characterId")
  async updateCharacterById(
    @Param("characterId") characterId: string,
    @Body() characterDataDto: CharacterDataDto
  ): Promise<CharacterDataDto> {
    return await this.characterService.updateCharacterById(
      characterId,
      characterDataDto
    );
  }

  @Delete("/:characterId")
  async deleteCharacterById(
    @Param("characterId") characterId: string
  ): Promise<void> {
    return await this.characterService.deleteCharacterById(characterId);
  }

  @Put("/:characterId/death_saves")
  async updateCharacterDeathSaves(
    @Param("characterId") characterId: string,
    @Body() updatedDeathSaves: CharacterDeathSavesDto
  ): Promise<CharacterDeathSavesDto> {
    return await this.characterService.updateCharacterDeathSaves(
      characterId,
      updatedDeathSaves
    );
  }
  @Put("/:characterId/known_spells")
  async updateKnownSpells(
    @Param("characterId") characterId: string,
    @Body() updatedKnownSpells: CharacterKnownSpellsDto
  ): Promise<CharacterKnownSpellsDto> {
    return await this.characterService.updateKnownSpells(
      characterId,
      updatedKnownSpells
    );
  }

  @Put("/:characterId/known_spells/:level")
  async updateKnownSpellsAtLevel(
    @Param("characterId") characterId: string,
    @Param("level") level: string,
    @Body() updatedKnownSpellsAtLevel: string[]
  ): Promise<string[]> {
    return await this.characterService.updateKnownSpellsAtLevel(
      characterId,
      level,
      updatedKnownSpellsAtLevel
    );
  }

  @Put("/:characterId/ability_scores")
  async updateAbilityScores(
    @Param("characterId") characterId: string,
    @Body() updatedAbilityScores: CharacterAbilityScoresDto
  ): Promise<CharacterAbilityScoresDto> {
    return await this.characterService.updateAbilityScores(
      characterId,
      updatedAbilityScores
    );
  }

  @Post("/:characterId/features_and_traits")
  async createFeatureAndTrait(
    @Param("characterId") characterId: string,
    @Body() featureAndTrait: CharacterFeatureAndTraitDto
  ): Promise<CharacterFeatureAndTraitDto> {
    return await this.characterService.createFeatureAndTrait(
      characterId,
      featureAndTrait
    );
  }

  @Post("/:characterId/features_and_traits/bulk")
  async createFeaturesAndTraits(
    @Param("characterId") characterId: string,
    @Body() featuresAndTraits: CharacterFeatureAndTraitDto[]
  ): Promise<CharacterFeatureAndTraitDto[]> {
    return await this.characterService.createFeaturesAndTraits(
      characterId,
      featuresAndTraits
    );
  }

  @Put("/:characterId/features_and_traits/:fatId")
  async updateFeatureAndTrait(
    @Param("characterId") characterId: string,
    @Param("fatId") fatId: string,
    @Body() updatedFeatureAndTrait: CharacterFeatureAndTraitDto
  ): Promise<CharacterFeatureAndTraitDto> {
    return await this.characterService.updateFeatureAndTrait(
      characterId,
      fatId,
      updatedFeatureAndTrait
    );
  }

  @Delete("/:characterId/features_and_traits/:fatId")
  async deleteFeatureAndTrait(
    @Param("characterId") characterId: string,
    @Param("fatId") fatId: string
  ): Promise<void> {
    return await this.characterService.deleteFeatureAndTrait(
      characterId,
      fatId
    );
  }

  @Put("/:characterId/spell_slots/")
  async updateSpellSlots(
    @Param("characterId") characterId: string,
    @Body() updatedSpellSlots: CharacterSpellSlotsDto
  ): Promise<CharacterSpellSlotsDto> {
    return await this.characterService.updateSpellSlots(
      characterId,
      updatedSpellSlots
    );
  }

  @Put("/:characterId/spell_slots/:level")
  async updateSpellSlotsAtLevel(
    @Param("characterId") characterId: string,
    @Param("level") level: string,
    @Body() spellSlotsAtLevel: CharacterSpellSlotsAtLevelDto
  ): Promise<CharacterSpellSlotsAtLevelDto> {
    return await this.characterService.updateSpellSlotsAtLevel(
      characterId,
      level,
      spellSlotsAtLevel
    );
  }

  @Put("/:characterId/treasure/money")
  async updateTreasureMoney(
    @Param("characterId") characterId: string,
    @Body() updatedTreasureMoney: CharacterTreasureMoneyDto
  ): Promise<CharacterTreasureMoneyDto> {
    return await this.characterService.updateTreasureMoney(
      characterId,
      updatedTreasureMoney
    );
  }

  @Put("/:characterId/treasure/items/:id")
  async updateTreasureItem(
    @Param("characterId") characterId: string,
    @Param("id") id: string,
    @Body() updatedTreasureItem: CharacterTreasureItemDto
  ): Promise<CharacterTreasureItemDto> {
    return await this.characterService.updateTreasureItem(
      characterId,
      id,
      updatedTreasureItem
    );
  }

  @Post("/:characterId/treasure/items")
  async createTreasureItem(
    @Param("characterId") characterId: string,
    @Body() newTreasureItem: CharacterTreasureItemDto
  ): Promise<CharacterTreasureItemDto> {
    return await this.characterService.createTreasureItem(
      characterId,
      newTreasureItem
    );
  }

  @Delete("/:characterId/treasure/items/:id")
  async deleteTreasureItem(
    @Param("characterId") characterId: string,
    @Param("id") id: string
  ): Promise<void> {
    return await this.characterService.deleteTreasureItem(characterId, id);
  }

  @Put("/:characterId/settings")
  async updateCharacterSettings(
    @Param("characterId") characterId: string,
    @Body() updatedSettings: CharacterSheetSettingsDto
  ): Promise<CharacterSheetSettingsDto> {
    return await this.characterService.updateCharacterSettings(
      characterId,
      updatedSettings
    );
  }

  @Post("/:characterId/hit_dice")
  async createHitDice(
    @Param("characterId") characterId: string,
    @Body() newHitDice: CharacterHitDiceDto
  ): Promise<CharacterHitDiceDto> {
    return await this.characterService.createHitDice(characterId, newHitDice);
  }

  @Delete("/:characterId/hit_dice/:id")
  async deleteHitDice(
    @Param("characterId") characterId: string,
    @Param("id") id: string
  ): Promise<void> {
    return await this.characterService.deleteHitDice(characterId, id);
  }

  @Put("/:characterId/hit_dice/:id")
  async updateHitDice(
    @Param("characterId") characterId: string,
    @Param("id") id: string,
    @Body() updatedHitDice: CharacterHitDiceDto
  ): Promise<CharacterHitDiceDto> {
    return await this.characterService.updateHitDice(
      characterId,
      id,
      updatedHitDice
    );
  }
}
