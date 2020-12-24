import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { CharacterDataDto } from "../dto/CharacterData.dto";
import { CharacterService } from "../service/character.service";
import { CharacterDeathSavesDto } from "../dto/CharacterDeathSaves.dto";
import { CharacterKnownSpellsDto } from "../dto/CharacterKnownSpells.dto";
import { CharacterAbilityScoresDto } from "../dto/CharacterAbilityScores.dto";
import { CharacterFeatureAndTraitDto } from "../dto/CharacterFeatureAndTraitDto";
import { CharacterSpellSlotsDto } from "../dto/CharacterSpellSlots.dto";
import { CharacterSpellSlotsAtLevelDto } from "../dto/CharacterSpellSlotsAtLevel.dto";
import { CharacterTreasureMoneyDto } from "../dto/CharacterTreasureMoney.dto";
import { CharacterTreasureItemDto } from "../dto/CharacterTreasureItemDto";
import { CharacterSheetSettingsDto } from "../dto/CharacterSheetSettings.dto";
import { CharacterHitDiceDto } from "../dto/CharacterHitDice.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("character")
@Controller("character")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get("/characters/:characterId")
  async getCharacterById(
    @Param("characterId") characterId: string
  ): Promise<CharacterDataDto> {
    return await this.characterService.getCharacterById(characterId);
  }

  @Get("/characters/user/:username")
  async getCharactersByUsername(
    @Param("username") username: string
  ): Promise<number[]> {
    return await this.characterService.getCharactersByUsername(username);
  }

  @Post("/characters")
  async createCharacter(
    @Body() characterDataDto: CharacterDataDto
  ): Promise<CharacterDataDto> {
    return await this.characterService.createCharacter(characterDataDto);
  }

  @Put("/characters/:characterId")
  async updateCharacterById(
    @Param("characterId") characterId: string,
    @Body() characterDataDto: CharacterDataDto
  ): Promise<CharacterDataDto> {
    return await this.characterService.updateCharacterById(
      characterId,
      characterDataDto
    );
  }

  @Delete("/characters/:characterId")
  async deleteCharacterById(
    @Param("characterId") characterId: string
  ): Promise<void> {
    return await this.characterService.deleteCharacterById(characterId);
  }

  @Put("/characters/:characterId/death_saves")
  async updateCharacterDeathSaves(
    @Param("characterId") characterId: string,
    @Body() updatedDeathSaves: CharacterDeathSavesDto
  ): Promise<CharacterDeathSavesDto> {
    return await this.characterService.updateCharacterDeathSaves(
      characterId,
      updatedDeathSaves
    );
  }
  @Put("/characters/:characterId/known_spells")
  async updateKnownSpells(
    @Param("characterId") characterId: string,
    @Body() updatedKnownSpells: CharacterKnownSpellsDto
  ): Promise<CharacterKnownSpellsDto> {
    return await this.characterService.updateKnownSpells(
      characterId,
      updatedKnownSpells
    );
  }

  @Put("/characters/:characterId/known_spells/:level")
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

  @Put("/characters/:characterId/ability_scores")
  async updateAbilityScores(
    @Param("characterId") characterId: string,
    @Body() updatedAbilityScores: CharacterAbilityScoresDto
  ): Promise<CharacterAbilityScoresDto> {
    return await this.characterService.updateAbilityScores(
      characterId,
      updatedAbilityScores
    );
  }

  @Post("/characters/:characterId/features_and_traits")
  async createFeatureAndTrait(
    @Param("characterId") characterId: string,
    @Body() featureAndTrait: CharacterFeatureAndTraitDto
  ): Promise<CharacterFeatureAndTraitDto> {
    return await this.characterService.createFeatureAndTrait(
      characterId,
      featureAndTrait
    );
  }

  @Post("/characters/:characterId/features_and_traits/bulk")
  async createFeaturesAndTraits(
    @Param("characterId") characterId: string,
    @Body() featuresAndTraits: CharacterFeatureAndTraitDto[]
  ): Promise<CharacterFeatureAndTraitDto[]> {
    return await this.characterService.createFeaturesAndTraits(
      characterId,
      featuresAndTraits
    );
  }

  @Put("/characters/:characterId/features_and_traits/:fatId")
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

  @Delete("/characters/:characterId/features_and_traits/:fatId")
  async deleteFeatureAndTrait(
    @Param("characterId") characterId: string,
    @Param("fatId") fatId: string
  ): Promise<void> {
    return await this.characterService.deleteFeatureAndTrait(
      characterId,
      fatId
    );
  }

  @Put("/characters/:characterId/spell_slots/")
  async updateSpellSlots(
    @Param("characterId") characterId: string,
    @Body() updatedSpellSlots: CharacterSpellSlotsDto
  ): Promise<CharacterSpellSlotsDto> {
    return await this.characterService.updateSpellSlots(
      characterId,
      updatedSpellSlots
    );
  }

  @Put("/characters/:characterId/spell_slots/:level")
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

  @Put("/characters/:characterId/treasure/money")
  async updateTreasureMoney(
    @Param("characterId") characterId: string,
    @Body() updatedTreasureMoney: CharacterTreasureMoneyDto
  ): Promise<CharacterTreasureMoneyDto> {
    return await this.characterService.updateTreasureMoney(
      characterId,
      updatedTreasureMoney
    );
  }

  @Put("/characters/:characterId/treasure/items/:id")
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

  @Post("/characters/:characterId/treasure/items")
  async createTreasureItem(
    @Param("characterId") characterId: string,
    @Body() newTreasureItem: CharacterTreasureItemDto
  ): Promise<CharacterTreasureItemDto> {
    return await this.characterService.createTreasureItem(
      characterId,
      newTreasureItem
    );
  }

  @Delete("/characters/:characterId/treasure/items/:id")
  async deleteTreasureItem(
    @Param("characterId") characterId: string,
    @Param("id") id: string
  ): Promise<void> {
    return await this.characterService.deleteTreasureItem(characterId, id);
  }

  @Put("/characters/:characterId/settings")
  async updateCharacterSettings(
    @Param("characterId") characterId: string,
    @Body() updatedSettings: CharacterSheetSettingsDto
  ): Promise<CharacterSheetSettingsDto> {
    return await this.characterService.updateCharacterSettings(
      characterId,
      updatedSettings
    );
  }

  @Post("/characters/:characterId/hit_dice")
  async createHitDice(
    @Param("characterId") characterId: string,
    @Body() newHitDice: CharacterHitDiceDto
  ): Promise<CharacterHitDiceDto> {
    return await this.characterService.createHitDice(characterId, newHitDice);
  }

  @Delete("/characters/:characterId/hit_dice/:id")
  async deleteHitDice(
    @Param("characterId") characterId: string,
    @Param("id") id: string
  ): Promise<void> {
    return await this.characterService.deleteHitDice(characterId, id);
  }

  @Put("/characters/:characterId/hit_dice/:id")
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
