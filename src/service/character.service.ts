import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CharacterDataDto } from "../dto/character/CharacterData.dto";
import { Repository } from "typeorm";
import { CharacterDeathSavesDto } from "../dto/character/CharacterDeathSaves.dto";
import { CharacterKnownSpellsDto } from "../dto/character/CharacterKnownSpells.dto";
import { CharacterAbilityScoresDto } from "../dto/character/CharacterAbilityScores.dto";
import { CharacterFeatureAndTraitDto } from "../dto/character/CharacterFeatureAndTraitDto";
import { CharacterSpellSlotsDto } from "../dto/character/CharacterSpellSlots.dto";
import { CharacterTreasureMoneyDto } from "../dto/character/CharacterTreasureMoney.dto";
import { CharacterTreasureItemDto } from "../dto/character/CharacterTreasureItemDto";
import { CharacterSheetSettingsDto } from "../dto/character/CharacterSheetSettings.dto";
import { CharacterHitDiceDto } from "../dto/character/CharacterHitDice.dto";
import { CharacterSpellSlotsAtLevelDto } from "../dto/character/CharacterSpellSlotsAtLevel.dto";

import { CharacterDataEntity } from "../entity/character/CharacterData.entity";
import { CharacterAbilityScoresEntity } from "../entity/character/CharacterAbilityScores.entity";
import { CharacterDeathSavesEntity } from "../entity/character/CharacterDeathSaves.entity";
import { CharacterFeaturesAndTraitsEntity } from "../entity/character/CharacterFeaturesAndTraits.entity";
import { CharacterHitDiceEntity } from "../entity/character/CharacterHitDice.entity";
import { CharacterSheetSettingsEntity } from "../entity/character/CharacterSheetSettings.entity";
import { CharacterKnownSpellsEntity } from "../entity/character/CharacterKnownSpells.entity";
import { CharacterSpellSlotsEntity } from "../entity/character/CharacterSpellSlots.entity";
import { CharacterSpellSlotsAtLevelEntity } from "../entity/character/CharacterSpellSlotsAtLevel.entity";
import { CharacterTreasureEntity } from "../entity/character/CharacterTreasure.entity";
import { CharacterTreasureItemEntity } from "../entity/character/CharacterTreasureItem.entity";
import { CharacterTreasureMoneyEntity } from "../entity/character/CharacterTreasureMoney.entity";
import { CharacterMapper } from "../mapper/character.mapper";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(CharacterDataEntity)
    private characterDataRepository: Repository<CharacterDataEntity>,

    @InjectRepository(CharacterAbilityScoresEntity)
    private abilityScoreRepository: Repository<CharacterAbilityScoresEntity>,

    @InjectRepository(CharacterDeathSavesEntity)
    private deathSaveRepository: Repository<CharacterDeathSavesEntity>,

    @InjectRepository(CharacterFeaturesAndTraitsEntity)
    private featuresAndTraitsRepository: Repository<CharacterFeaturesAndTraitsEntity>,

    @InjectRepository(CharacterHitDiceEntity)
    private hitDiceRepository: Repository<CharacterHitDiceEntity>,

    @InjectRepository(CharacterKnownSpellsEntity)
    private knownSpellsRepository: Repository<CharacterKnownSpellsEntity>,

    @InjectRepository(CharacterSheetSettingsEntity)
    private settingsRepository: Repository<CharacterSheetSettingsEntity>,

    @InjectRepository(CharacterSpellSlotsEntity)
    private spellSlotsRepository: Repository<CharacterSpellSlotsEntity>,

    @InjectRepository(CharacterSpellSlotsAtLevelEntity)
    private spellSlotsAtLevelRepository: Repository<CharacterSpellSlotsAtLevelEntity>,

    @InjectRepository(CharacterTreasureEntity)
    private treasureRepository: Repository<CharacterTreasureEntity>,

    @InjectRepository(CharacterTreasureItemEntity)
    private itemRepository: Repository<CharacterTreasureItemEntity>,

    @InjectRepository(CharacterTreasureMoneyEntity)
    private moneyRepository: Repository<CharacterTreasureMoneyEntity>
  ) {}

  private characterMapper = new CharacterMapper();

  async getCharacterById(characterId: string): Promise<any> {
    return await this.characterDataRepository.findOne({
      where: { id: characterId },
    });
  }

  async getCharactersByUsername(username: string): Promise<any> {
    return await this.characterDataRepository.find({
      where: { username: username },
    });
  }

  async deleteCharacterById(characterId: string): Promise<any> {
    await this.characterDataRepository
      .createQueryBuilder()
      .delete()
      .where("id = :characterId", { characterId: characterId })
      .execute();
  }

  async createCharacter(characterDto: CharacterDataDto): Promise<any> {
    const characterEntity = this.characterMapper.characterDataDtoToEntity(
      characterDto
    );
    console.log(characterEntity);

    return await this.characterDataRepository.save(characterEntity);
  }

  //todo: test
  async updateCharacterById(
    characterId: string,
    newCharacter: CharacterDataDto
  ): Promise<any> {
    const characterEntity = await this.getCharacterById(characterId);
    const updateCharacterDataEntity = this.characterMapper.characterDataDtoToEntity(
      newCharacter
    );
    const updatedCharacter = this.characterMapper.mergeCharacterEntities(
      characterEntity,
      updateCharacterDataEntity
    );
    await this.characterDataRepository.save(characterEntity);
  }

  async updateCharacterDeathSaves(
    characterId: string,
    updatedDeathSaves: CharacterDeathSavesDto
  ): Promise<any> {
    return (
      await this.deathSaveRepository
        .createQueryBuilder("deathSave")
        .update(CharacterDeathSavesEntity)
        .set(updatedDeathSaves)
        .where("characterId = :characterId", { characterId: characterId })
        .returning(["successes", "failures"])
        .execute()
    ).raw[0];
  }

  async updateKnownSpells(
    characterId: string,
    newKnownSpells: CharacterKnownSpellsDto
  ): Promise<any> {
    return (
      await this.knownSpellsRepository
        .createQueryBuilder("knownSpells")
        .update(CharacterKnownSpellsEntity)
        .set(newKnownSpells)
        .where("characterId = :characterId", { characterId: characterId })
        .returning(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
        .execute()
    ).raw[0];
  }

  async updateKnownSpellsAtLevel(
    characterId: string,
    level: string,
    newKnownSpellsAtLevel: string[]
  ): Promise<any> {
    return (
      await this.knownSpellsRepository
        .createQueryBuilder("knownSpellsAtLevel")
        .update(CharacterKnownSpellsEntity)
        .set({ [level]: newKnownSpellsAtLevel })
        .where("characterId = :characterId", { characterId: characterId })
        .returning([level])
        .execute()
    ).raw[0];
  }

  async updateAbilityScores(
    characterId: string,
    newAbilityScores: CharacterAbilityScoresDto
  ): Promise<any> {
    return (
      await this.abilityScoreRepository
        .createQueryBuilder("abilityScores")
        .update(CharacterAbilityScoresEntity)
        .set(newAbilityScores)
        .where("characterId = :characterId", { characterId: characterId })
        .returning(Object.keys(newAbilityScores))
        .execute()
    ).raw[0];
  }

  //TODO extremely inefficient way ot saving since I already have characterId
  async createFeatureAndTrait(
    characterId: string,
    newFeatureAndTrait: CharacterFeatureAndTraitDto
  ): Promise<any> {
    const fatEntity = this.characterMapper.featureAndTraitDtoToEntity(
      newFeatureAndTrait
    );
    fatEntity.character = await this.getCharacterById(characterId);

    await this.featuresAndTraitsRepository.save(fatEntity);
  }

  //TODO extremely inefficient way ot saving since I already have characterId
  async createFeaturesAndTraits(
    characterId: string,
    newFeaturesAndTraits: CharacterFeatureAndTraitDto[]
  ): Promise<any> {
    const character = await this.getCharacterById(characterId);
    const newFatEntities = newFeaturesAndTraits.map((fat) => {
      const fatEntity = this.characterMapper.featureAndTraitDtoToEntity(fat);
      fatEntity.character = character;
      return fatEntity;
    });
    character.featuresAndTraits.push(...newFatEntities);
    await this.characterDataRepository.save(character);
  }

  async updateFeatureAndTrait(
    characterId: string,
    fatId: string,
    updatedFeatureAndTrait: CharacterFeatureAndTraitDto
  ): Promise<any> {
    return (
      await this.featuresAndTraitsRepository
        .createQueryBuilder()
        .update(CharacterFeaturesAndTraitsEntity)
        .set(updatedFeatureAndTrait)
        .where("characterId = :characterId", { characterId: characterId })
        .andWhere("id = :fatId", { fatId: fatId })
        .returning(Object.keys(updatedFeatureAndTrait))
        .execute()
    ).raw[0];
  }

  async deleteFeatureAndTrait(
    characterId: string,
    fatId: string
  ): Promise<void> {
    await this.featuresAndTraitsRepository
      .createQueryBuilder()
      .delete()
      .where("id = :fatId", { fatId: fatId })
      .andWhere("characterId = :characterId", { characterId: characterId })
      .execute();
  }

  async updateSpellSlots(
    characterId: string,
    newSpellSlots: CharacterSpellSlotsDto
  ): Promise<any> {
    const res = await this.spellSlotsRepository
      .createQueryBuilder()
      .update(CharacterSpellSlotsEntity)
      .set(newSpellSlots)
      .where("characterId = :characterId", { characterId: characterId })
      .returning(Object.keys(newSpellSlots))
      .execute();

    return res.raw[0];
  }

  async updateSpellSlotsAtLevel(
    characterId: string,
    level: string,
    newSpellSlotsAtLevel: CharacterSpellSlotsAtLevelDto
  ): Promise<any> {
    const spellSlotsEntity = await this.spellSlotsRepository
      .createQueryBuilder()
      .where("CharacterSpellSlots.characterId = :characterId", {
        characterId: characterId,
      })
      .getOne();

    spellSlotsEntity[level] = this.characterMapper.spellSlotAtLevelDtoToEntity(
      newSpellSlotsAtLevel
    );
    await this.spellSlotsRepository.save(spellSlotsEntity);
  }

  async updateTreasureMoney(
    characterId: string,
    updatedTreasureMoney: CharacterTreasureMoneyDto
  ): Promise<any> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(
      characterId
    );
    return (
      await this.moneyRepository
        .createQueryBuilder()
        .update(CharacterTreasureMoneyEntity)
        .set(updatedTreasureMoney)
        .where("parentTreasureId = :parentTreasureId", {
          parentTreasureId: parentTreasureEntity.id,
        })
        .returning(Object.keys(updatedTreasureMoney))
        .execute()
    ).raw[0];
  }

  async updateTreasureItem(
    characterId: string,
    id: string,
    updatedTreasureItem: CharacterTreasureItemDto
  ): Promise<any> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(
      characterId
    );
    return (
      await this.itemRepository
        .createQueryBuilder()
        .update(CharacterTreasureItemEntity)
        .set(updatedTreasureItem)
        .where("id = :id", { id: id })
        .andWhere("parentTreasureId = :parentTreasureId", {
          parentTreasureId: parentTreasureEntity.id,
        })
        .returning(Object.keys(updatedTreasureItem))
        .execute()
    ).raw[0];
  }

  async createTreasureItem(
    characterId: string,
    newTreasureItem: CharacterTreasureItemDto
  ): Promise<any> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(
      characterId
    );

    const newTreasureItemEntity = this.characterMapper.treasureItemDtoToEntity(
      newTreasureItem
    );
    parentTreasureEntity.items.push(newTreasureItemEntity);
    await this.treasureRepository.save(parentTreasureEntity);
  }

  async deleteTreasureItem(characterId: string, id: string): Promise<void> {
    const parentTreasureEntity = await this.getTreasureEntityFromCharacterId(
      characterId
    );

    await this.itemRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .andWhere("parentTreasureId = :parentTreasureId", {
        parentTreasureId: parentTreasureEntity.id,
      })
      .execute();
  }

  async updateCharacterSettings(
    characterId: string,
    updatedSettings: CharacterSheetSettingsDto
  ): Promise<any> {
    return (
      await this.settingsRepository
        .createQueryBuilder()
        .update(CharacterSheetSettingsEntity)
        .set(updatedSettings)
        .where("characterId = :characterId", { characterId: characterId })
        .returning(Object.keys(updatedSettings))
        .execute()
    ).raw[0];
  }

  async createHitDice(
    characterId: string,
    newHitDice: CharacterHitDiceDto
  ): Promise<any> {
    const hitDiceEntity = this.characterMapper.hitDieDtoToEntity(newHitDice);

    hitDiceEntity.character = await this.getCharacterById(characterId);
    await this.hitDiceRepository.save(hitDiceEntity);

    return newHitDice;
  }

  async deleteHitDice(characterId: string, id: string): Promise<void> {
    await this.hitDiceRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .andWhere("characterId = :characterId", { characterId: characterId })
      .execute();
  }

  async updateHitDice(
    characterId: string,
    id: string,
    updatedHitDice: CharacterHitDiceDto
  ): Promise<any> {
    return (
      await this.hitDiceRepository
        .createQueryBuilder()
        .update(CharacterHitDiceEntity)
        .set(updatedHitDice)
        .where("characterId = :characterId", { characterId: characterId })
        .andWhere("id = :id", { id: id })
        .returning(Object.keys(updatedHitDice))
        .execute()
    ).raw[0];
  }

  private async getTreasureEntityFromCharacterId(
    characterId: string
  ): Promise<CharacterTreasureEntity> {
    return await this.treasureRepository
      .createQueryBuilder()
      .where("CharacterTreasure.characterId = :characterId", {
        characterId: characterId,
      })
      .getOne();
  }
}
