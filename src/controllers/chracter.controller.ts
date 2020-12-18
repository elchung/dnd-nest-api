import {Controller, Get, Put, Post, Delete, Body, Param} from '@nestjs/common';
import {CharacterDataDto} from "../dto/CharacterData.dto";

@Controller('character')
export class characterController {
  @Get("/characters/:characterId")
  getCharacterById = (@Param('characterId') characterId: string): CharacterDataDto => {

  }

  @Get("/characters/user/:username")
  getCharactersByUsername = (@Param('username') username: string): number[] => {

  }

  @Post("/characters")
  createCharacter = (@Body() characterDataDto: CharacterDataDto): CharacterDataDto => {

  }

  @Put("/characters/:characterId")
  updateCharacterById = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/death_saves")
  updateCharacterDeathSaves = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }
  @Put("/characters/:characterId/known_spells")
  updateKnownSpells = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/known_spells/:level")
  updateKnownSpellsAtLevel = (
    @Param('characterId') characterId: string,
    @Param('level') level: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/ability_scores")
  updateAbilityScores = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Post("/characters/:characterId/features_and_traits")
  createFeatureAndTrait = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Post("/characters/:characterId/features_and_traits/bulk")
  createFeaturesAndTraits = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/features_and_traits")
  updateFeatureAndTrait = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Delete("/characters/:characterId/features_and_traits/:fatId")
  deleteFeatureAndTrait = (
    @Param('characterId') characterId: string,
    @Param('fatId') fatId: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/spell_slots/")
  updateSpellSlots = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/spell_slots/:level")
  updateSpellSlotsAtLevel = (
    @Param('characterId') characterId: string,
    @Param('level') level: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/treasure/money")
  updateTreasureMoney = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/treasure/items/:id")
  updateTreasureItem = (
    @Param('characterId') characterId: string,
    @Param('id') id: string,
    @Body()
  ): any => {

  }

  @Post("/characters/:characterId/treasure/items")
  createTreasureItem = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Delete("/characters/:characterId/treasure/items/:id")
  deleteTreasureItem = (
    @Param('characterId') characterId: string,
    @Param('id') id: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/settings")
  updateCharacterSettings = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Post("/characters/:characterId/hit_dice")
  createHitDice = (
    @Param('characterId') characterId: string,
    @Body()
  ): any => {

  }

  @Delete("/characters/:characterId/hit_dice/:id")
  deleteHitDice = (
    @Param('characterId') characterId: string,
    @Param('id') id: string,
    @Body()
  ): any => {

  }

  @Put("/characters/:characterId/hit_dice/:id")
  updateHitDice = (
    @Param('characterId') characterId: string,
    @Param('id') id: string,
    @Body()
  ): any => {

  }
}
