import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CharacterDataDto } from "../dto/CharacterData.dto";
import { Repository } from "typeorm";
import { CharacterDeathSavesDto } from "../dto/CharacterDeathSaves.dto";
import { CharacterKnownSpellsDto } from "../dto/CharacterKnownSpells.dto";
import { CharacterAbilityScoresDto } from "../dto/CharacterAbilityScores.dto";
import { CharacterFeatureAndTraitDto } from "../dto/CharacterFeatureAndTraitDto";
import { CharacterSpellSlotsDto } from "../dto/CharacterSpellSlots.dto";
import { CharacterTreasureMoneyDto } from "../dto/CharacterTreasureMoney.dto";
import { CharacterTreasureItemDto } from "../dto/CharacterTreasureItemDto";
import { CharacterSheetSettingsDto } from "../dto/CharacterSheetSettings.dto";
import { CharacterHitDiceDto } from "../dto/CharacterHitDice.dto";
import { CharacterSpellSlotsAtLevelDto } from "../dto/CharacterSpellSlotsAtLevel.dto";
import { CharacterData } from "../entity/CharacterData.entity";
import { CharacterAbilityScores } from "../entity/CharacterAbilityScores.entity";
import { CharacterDeathSaves } from "../entity/CharacterDeathSaves.entity";
import { CharacterFeaturesAndTraits } from "../entity/CharacterFeaturesAndTraits.entity";
import { CharacterHitDice } from "../entity/CharacterHitDice.entity";
import { CharacterSheetSettings } from "../entity/CharacterSheetSettings.entity";
import { CharacterKnownSpells } from "../entity/CharacterKnownSpells.entity";
import { CharacterSpellSlots } from "../entity/CharacterSpellSlots.entity";
import { CharacterSpellSlotsAtLevel } from "../entity/CharacterSpellSlotsAtLevel.entity";
import { CharacterTreasure } from "../entity/CharacterTreasure.entity";
import { CharacterTreasureItem } from "../entity/CharacterTreasureItem.entity";
import { CharacterTreasureMoney } from "../entity/CharacterTreasureMoney.entity";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(CharacterData)
    private characterDataRepository: Repository<CharacterData>,

    @InjectRepository(CharacterAbilityScores)
    private abilityScoreRepository: Repository<CharacterAbilityScores>,

    @InjectRepository(CharacterDeathSaves)
    private deathSaveRepository: Repository<CharacterDeathSaves>,

    @InjectRepository(CharacterFeaturesAndTraits)
    private featuresAndTraitsRepository: Repository<CharacterFeaturesAndTraits>,

    @InjectRepository(CharacterHitDice)
    private hitDiceRepository: Repository<CharacterHitDice>,

    @InjectRepository(CharacterKnownSpells)
    private knownSpellsRepository: Repository<CharacterKnownSpells>,

    @InjectRepository(CharacterSheetSettings)
    private settingsRepository: Repository<CharacterSheetSettings>,

    @InjectRepository(CharacterSpellSlots)
    private spellSlotsRepository: Repository<CharacterSpellSlots>,

    @InjectRepository(CharacterSpellSlotsAtLevel)
    private spellSlotsAtLevelRepository: Repository<CharacterSpellSlotsAtLevel>,

    @InjectRepository(CharacterTreasure)
    private treasureRepository: Repository<CharacterTreasure>,

    @InjectRepository(CharacterTreasureItem)
    private itemRepository: Repository<CharacterTreasureItem>,

    @InjectRepository(CharacterTreasureMoney)
    private moneyRepository: Repository<CharacterTreasureMoney>,
  ) {}

  async getCharacterById(characterId: string): Promise<any> {
    return await this.characterDataRepository.findOne({
      where: { id: characterId },
      //relations: {}
    });
  }

  async getCharactersByUsername(username: string): Promise<any> {
    return await this.characterDataRepository.find({
      where: { username: username },
      //relations: {}
    });
  }

  async createCharacter(characterDataDto: CharacterDataDto): Promise<any> {
    const newCharacter = await this.characterDataRepository.createQueryBuilder()
      .insert()
      .into(CharacterData)
      .values({

      })
      .execute()
  }

  async updateCharacterById(characterId: string, newCharacter: CharacterDataDto): Promise<any> {
    const newCharacter = await this.characterDataRepository.createQueryBuilder()
      .update(CharacterData)
      .set({keys to field mapping})
      .where("id = :id", { id: characterId })
      .execute()
  }

  async updateCharacterDeathSaves(characterId: string, newDeathSaves: CharacterDeathSavesDto): Promise<any> {

  }

  async updateKnownSpells(characterId: string, newKnownSpells: CharacterKnownSpellsDto): Promise<any> {

  }

  async updateKnownSpellsAtLevel(characterId: string, level: string, newKnownSpellsAtLevel: string[]): Promise<any> {

  }

  async updateAbilityScores(characterId: string, newAbilityScores: CharacterAbilityScoresDto): Promise<any> {

  }

  async createFeatureAndTrait(characterId: string, newFeatureAndTrait: CharacterFeatureAndTraitDto): Promise<any> {

  }

  async createFeaturesAndTraits(characterId: string, newFeaturesAndTraits: CharacterFeatureAndTraitDto[]): Promise<any> {

  }

  async updateFeatureAndTrait(characterId: string, fatId: string, updatedFeatureAndTrait: CharacterFeatureAndTraitDto): Promise<any> {

  }

  async deleteFeatureAndTrait(characterId: string, fatId: string): Promise<void> {

  }

  async updateSpellSlots(characterId: string, newSpellSlots: CharacterSpellSlotsDto): Promise<any> {

  }

  async updateSpellSlotsAtLevel(characterId: string, level: string, newSpellSlotsAtLevel: CharacterSpellSlotsAtLevelDto): Promise<any> {

  }

  async updateTreasureMoney(characterId: string, updatedTreasureMoney: CharacterTreasureMoneyDto): Promise<any> {

  }

  async updateTreasureItem(characterId: string, id: string, updatedTreasureItem: CharacterTreasureItemDto): Promise<any> {

  }

  async createTreasureItem(characterId: string, newTreasureItem: CharacterTreasureItemDto): Promise<any> {

  }

  async deleteTreasureItem(characterId: string, id: string): Promise<void> {

  }

  async updateCharacterSettings(characterId: string, updatedSettings: CharacterSheetSettingsDto): Promise<any> {

  }

  async createHitDice(characterId: string, newHitDice: CharacterHitDiceDto): Promise<any> {

  }

  async deleteHitDice(characterId: string, id: string): Promise<void> {

  }

  async updateHitDice(characterId: string, id: string, updatedHitDice: CharacterHitDiceDto): Promise<any> {

  }
}
