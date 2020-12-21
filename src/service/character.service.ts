import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CharacterDataDto } from "../dto/CharacterData.dto";
import { Repository, getConnection } from "typeorm";
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
import {CharacterMapper} from "../mapper/character.mapper";

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

  private relationalFields = ["hitDice", "abilityScores", "deathSaves", "knownSpells", "featuresAndTraits", "treasure", "settings", "spellSlots"]
  private characterMapper = new CharacterMapper();

  async getCharacterById(characterId: string): Promise<any> {
    return await this.characterDataRepository.findOne({ where: { id: characterId }});
  }

  async getCharactersByUsername(username: string): Promise<any> {
    return await this.characterDataRepository.find({ where: { username: username }});
  }

  async deleteCharacterById(characterId: string): Promise<any> {
    await this.characterDataRepository
      .createQueryBuilder()
      .delete()
      .where("id = :characterId", { characterId: characterId })
      .execute()
  }

  async createCharacter(characterDto: CharacterDataDto): Promise<any> {
    const characterEntity =  this.characterMapper.characterDataDtoToEntity(characterDto);
    console.log(characterEntity);

    return await this.characterDataRepository.save(characterEntity);
  }

  //todo: test
  async updateCharacterById(characterId: string, newCharacter: CharacterDataDto): Promise<any> {
    const characterEntity = await this.getCharacterById(characterId)
    const updateCharacterDataEntity = this.characterMapper.characterDataDtoToEntity(newCharacter)
    const updatedCharacter = this.mergeCharacterEntities(characterEntity, updateCharacterDataEntity);
  }

  async updateCharacterDeathSaves(characterId: string, updatedDeathSaves: CharacterDeathSavesDto): Promise<any> {
    return (await this.deathSaveRepository
      .createQueryBuilder("deathSave")
      .update(CharacterDeathSaves)
      .set(updatedDeathSaves)
      .where("characterId = :characterId", {characterId: characterId})
      .returning(['successes', 'failures'])
      .execute())
      .raw[0];
  }

  async updateKnownSpells(characterId: string, newKnownSpells: CharacterKnownSpellsDto): Promise<any> {
      return (await this.knownSpellsRepository
      .createQueryBuilder("knownSpells")
      .update(CharacterKnownSpells)
      .set(newKnownSpells)
      .where("characterId = :characterId", {characterId: characterId})
      .returning(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'])
      .execute())
      .raw[0]
  }

  async updateKnownSpellsAtLevel(characterId: string, level: string, newKnownSpellsAtLevel: string[]): Promise<any> {
    return (await this.knownSpellsRepository
      .createQueryBuilder("knownSpellsAtLevel")
      .update(CharacterKnownSpells)
      .set({ [level]: newKnownSpellsAtLevel })
      .where("characterId = :characterId", {characterId: characterId})
      .returning([level])
      .execute())
      .raw[0]
  }

  async updateAbilityScores(characterId: string, newAbilityScores: CharacterAbilityScoresDto): Promise<any> {
    return (await this.abilityScoreRepository
      .createQueryBuilder("abilityScores")
      .update(CharacterAbilityScores)
      .set(newAbilityScores)
      .where("characterId = :characterId", {characterId: characterId})
      .returning(Object.keys(newAbilityScores))
      .execute())
      .raw[0]
  }

  //TODO extremely inefficient way ot saving since I already have characterId
  async createFeatureAndTrait(characterId: string, newFeatureAndTrait: CharacterFeatureAndTraitDto): Promise<any> {
    const fatEntity = this.characterMapper.featureAndTraitDtoToEntity(newFeatureAndTrait);
    fatEntity.character = await this.getCharacterById(characterId);

    await this.featuresAndTraitsRepository.save(fatEntity);
  }

  //TODO extremely inefficient way ot saving since I already have characterId
  async createFeaturesAndTraits(characterId: string, newFeaturesAndTraits: CharacterFeatureAndTraitDto[]): Promise<any> {
    const character = await this.getCharacterById(characterId);
    const newFatEntities = newFeaturesAndTraits.map(fat => {
      const fatEntity = this.characterMapper.featureAndTraitDtoToEntity(fat);
      fatEntity.character = character;
      return fatEntity;
    })
    character.featuresAndTraits.push(...newFatEntities)
    await this.characterDataRepository.save(character);
  }

  async updateFeatureAndTrait(characterId: string, fatId: string, updatedFeatureAndTrait: CharacterFeatureAndTraitDto): Promise<any> {
    return (await this.featuresAndTraitsRepository
      .createQueryBuilder()
      .update(CharacterFeaturesAndTraits)
      .set(updatedFeatureAndTrait)
      .where("characterId = :characterId", {characterId: characterId})
      .andWhere("id = :fatId", {fatId: fatId})
      .returning(Object.keys(updatedFeatureAndTrait))
      .execute())
      .raw[0]
  }

  async deleteFeatureAndTrait(characterId: string, fatId: string): Promise<void> {
    await this.featuresAndTraitsRepository
      .createQueryBuilder()
      .delete()
      .where("id = :fatId", { fatId: fatId })
      .andWhere("characterId = :characterId", { characterId: characterId })
      .execute()
  }

  async updateSpellSlots(characterId: string, newSpellSlots: CharacterSpellSlotsDto): Promise<any> {
    const res = await this.spellSlotsRepository
      .createQueryBuilder()
      .update(CharacterSpellSlots)
      .set(newSpellSlots)
      .where("characterId = :characterId", {characterId: characterId})
      .returning(Object.keys(newSpellSlots))
      .execute()

    return res.raw[0];
  }

  async updateSpellSlotsAtLevel(characterId: string, level: string, newSpellSlotsAtLevel: CharacterSpellSlotsAtLevelDto): Promise<any> {
    const spellSlotsEntity = await this.spellSlotsRepository
      .createQueryBuilder()
      .where("CharacterSpellSlots.characterId = :characterId", {characterId: characterId})
      .getOne();

    spellSlotsEntity[level] = this.characterMapper.spellSlotAtLevelDtoToEntity(newSpellSlotsAtLevel)
    await this.spellSlotsRepository.save(spellSlotsEntity)
  }

  async updateTreasureMoney(characterId: string, updatedTreasureMoney: CharacterTreasureMoneyDto): Promise<any> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(characterId);
    return (await this.moneyRepository
      .createQueryBuilder()
      .update(CharacterTreasureMoney)
      .set(updatedTreasureMoney)
      .where("parentTreasureId = :parentTreasureId", {parentTreasureId: parentTreasureEntity.id})
      .returning(Object.keys(updatedTreasureMoney))
      .execute())
      .raw[0]
  }

  async updateTreasureItem(characterId: string, id: string, updatedTreasureItem: CharacterTreasureItemDto): Promise<any> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(characterId);
    return (await this.itemRepository
      .createQueryBuilder()
      .update(CharacterTreasureItem)
      .set(updatedTreasureItem)
      .where("id = :id", {id: id})
      .andWhere("parentTreasureId = :parentTreasureId", {parentTreasureId: parentTreasureEntity.id})
      .returning(Object.keys(updatedTreasureItem))
      .execute())
      .raw[0]
  }

  async createTreasureItem(characterId: string, newTreasureItem: CharacterTreasureItemDto): Promise<any> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(characterId);

    const newTreasureItemEntity = this.characterMapper.treasureItemDtoToEntity(newTreasureItem);
    parentTreasureEntity.items.push(newTreasureItemEntity);
    await this.treasureRepository.save(parentTreasureEntity);
  }

  async deleteTreasureItem(characterId: string, id: string): Promise<void> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(characterId);

    await this.itemRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .andWhere("parentTreasureId = :parentTreasureId", { parentTreasureId: parentTreasureEntity.id })
      .execute()
  }

  async updateCharacterSettings(characterId: string, updatedSettings: CharacterSheetSettingsDto): Promise<any> {
    return (await this.settingsRepository
      .createQueryBuilder()
      .update(CharacterSheetSettings)
      .set(updatedSettings)
      .where("characterId = :characterId", {characterId: characterId})
      .returning(Object.keys(updatedSettings))
      .execute())
      .raw[0];
  }

  async createHitDice(characterId: string, newHitDice: CharacterHitDiceDto): Promise<any> {
    const hitDiceEntity = this.characterMapper.hitDieDtoToEntity(newHitDice);

    hitDiceEntity.character = await this.getCharacterById(characterId);
    await this.hitDiceRepository.save(hitDiceEntity);

    return newHitDice
  }

  async deleteHitDice(characterId: string, id: string): Promise<void> {
    await this.hitDiceRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .andWhere("characterId = :characterId", { characterId: characterId })
      .execute()
  }

  async updateHitDice(characterId: string, id: string, updatedHitDice: CharacterHitDiceDto): Promise<any> {
    return (await this.hitDiceRepository
      .createQueryBuilder()
      .update(CharacterHitDice)
      .set(updatedHitDice)
      .where("characterId = :characterId", {characterId: characterId})
      .andWhere("id = :id", {id: id})
      .returning(Object.keys(updatedHitDice))
      .execute())
      .raw[0];
  }

  private async getTreasureEntityFromCharacterId(characterId: string): Promise<CharacterTreasure> {
    return await this.treasureRepository
      .createQueryBuilder()
      .where("CharacterTreasure.characterId = :characterId", {characterId: characterId})
      .getOne()
  }

  private mergeCharacterEntities(primaryCharacter: CharacterData, updateCharacter: CharacterData): CharacterData {
    Object.keys(updateCharacter).forEach(field => {
      if (!this.relationalFields.includes(field)) {
        primaryCharacter[field] = updateCharacter[field] || primaryCharacter[field]
      } else {
        --create nested array
      }

    })

    return primaryCharacter
  }
}
