import { Injectable } from '@nestjs/common';
import {CharacterDataDto} from "../dto/CharacterData.dto";
import {CharacterDeathSavesDto} from "../dto/CharacterDeathSaves.dto";
import {CharacterKnownSpellsDto} from "../dto/CharacterKnownSpells.dto";
import {CharacterAbilityScoresDto} from "../dto/CharacterAbilityScores.dto";
import {CharacterFeaturesAndTraitsDto} from "../dto/CharacterFeaturesAndTraits.dto";
import {CharacterSpellSlotsDto} from "../dto/CharacterSpellSlots.dto";

@Injectable()
export class CharacterService {
  getCharacterById = (characterId: string): CharacterDataDto => {

  }

  getCharactersByUsername = (username: string): number[] => {

  }

  createCharacter = (characterDataDto: CharacterDataDto): CharacterDataDto => {

  }

  updateCharacterById = (characterId: string, newCharacter: CharacterDataDto): any => {

  }

  updateCharacterDeathSaves = (characterId: string, newDeathSaves: CharacterDeathSavesDto): any => {

  }

  updateKnownSpells = (characterId: string, newKnownSpells: CharacterKnownSpellsDto): any => {

  }

  updateKnownSpellsAtLevel = (characterId: string, level: string, newKnownSpellsAtLevel: string[]): any => {

  }

  updateAbilityScores = (characterId: string, newAbilityScores: CharacterAbilityScoresDto): any => {

  }

  createFeatureAndTrait = (characterId: string, newFeatureAndTrait: CharacterFeaturesAndTraitsDto): any => {

  }

  createFeaturesAndTraits = (characterId: string, newFeaturesAndTraits: CharacterFeaturesAndTraitsDto[]): any => {

  }

  updateFeatureAndTrait = (characterId: string, fatId: string, updatedFeatureAndTrait: CharacterFeaturesAndTraitsDto): any => {

  }

  deleteFeatureAndTrait = (characterId: string, fatId: string): any => {

  }

  updateSpellSlots = (characterId: string, newSpellSlots: CharacterSpellSlotsDto): any => {

  }

updateSpellSlotsAtLevel = (characterId: string, level: string, newSpellSlotsAtLevel: CharacterSpellSlotsDto
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
