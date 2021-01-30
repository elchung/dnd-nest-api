import { CharacterHitDiceDto } from "../dto/character/CharacterHitDice.dto";
import { CharacterHitDiceEntity } from "../entity/character/CharacterHitDice.entity";
import { CharacterDataEntity } from "../entity/character/CharacterData.entity";
import { CharacterSpellSlotsEntity } from "../entity/character/CharacterSpellSlots.entity";
import { CharacterSpellSlotsAtLevelEntity } from "../entity/character/CharacterSpellSlotsAtLevel.entity";
import { CharacterSpellSlotsDto } from "../dto/character/CharacterSpellSlots.dto";
import { CharacterSpellSlotsAtLevelDto } from "../dto/character/CharacterSpellSlotsAtLevel.dto";
import { CharacterDataDto } from "../dto/character/CharacterData.dto";
import { CharacterAbilityScoresDto } from "../dto/character/CharacterAbilityScores.dto";
import { CharacterAbilityScoresEntity } from "../entity/character/CharacterAbilityScores.entity";
import { CharacterDeathSavesDto } from "../dto/character/CharacterDeathSaves.dto";
import { CharacterDeathSavesEntity } from "../entity/character/CharacterDeathSaves.entity";
import { CharacterKnownSpellsDto } from "../dto/character/CharacterKnownSpells.dto";
import { CharacterKnownSpellsEntity } from "../entity/character/CharacterKnownSpells.entity";
import { CharacterFeatureAndTraitDto } from "../dto/character/CharacterFeatureAndTraitDto";
import { CharacterFeaturesAndTraitsEntity } from "../entity/character/CharacterFeaturesAndTraits.entity";
import { CharacterTreasureItemDto } from "../dto/character/CharacterTreasureItemDto";
import { CharacterTreasureItemEntity } from "../entity/character/CharacterTreasureItem.entity";
import { CharacterTreasureEntity } from "../entity/character/CharacterTreasure.entity";
import { CharacterTreasureMoneyDto } from "../dto/character/CharacterTreasureMoney.dto";
import { CharacterTreasureMoneyEntity } from "../entity/character/CharacterTreasureMoney.entity";
import { CharacterTreasureDto } from "../dto/character/CharacterTreasure.dto";
import { CharacterSheetSettingsDto } from "../dto/character/CharacterSheetSettings.dto";
import { CharacterSheetSettingsEntity } from "../entity/character/CharacterSheetSettings.entity";

export class CharacterMapper {
  hitDieDtoToEntity(
    hitDieDto: CharacterHitDiceDto | null
  ): CharacterHitDiceEntity {
    const newHD = new CharacterHitDiceEntity();
    newHD.numDice = hitDieDto.numDice;
    newHD.diceType = hitDieDto.diceType;
    newHD.numUsed = hitDieDto.numUsed;

    return newHD;
  }

  hitDiceDtoToEntity(
    hitDiceDto: CharacterHitDiceDto[] | null
  ): CharacterHitDiceEntity[] {
    return hitDiceDto ? hitDiceDto.map((hd) => this.hitDieDtoToEntity(hd)) : [];
  }

  spellSlotAtLevelDtoToEntity(
    spellSlotsAtLevelDto: CharacterSpellSlotsAtLevelDto | null
  ): CharacterSpellSlotsAtLevelEntity {
    const spellSlotsAtLevel = new CharacterSpellSlotsAtLevelEntity();
    spellSlotsAtLevel.used = spellSlotsAtLevelDto?.used;
    spellSlotsAtLevel.max = spellSlotsAtLevelDto?.max;

    return spellSlotsAtLevel;
  }

  spellSlotDtoToEntity(
    spellSlotDto: CharacterSpellSlotsDto | null
  ): CharacterSpellSlotsEntity {
    const spellSlots = new CharacterSpellSlotsEntity();
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((level) => {
      spellSlots[level] = this.spellSlotAtLevelDtoToEntity(
        spellSlotDto?.[level]
      );
    });
    return spellSlots;
  }

  abilityScoresDtoToEntity(
    abilityScoresDto: CharacterAbilityScoresDto | null
  ): CharacterAbilityScoresEntity {
    const abilityScores = new CharacterAbilityScoresEntity();
    abilityScores.strength = abilityScoresDto?.strength;
    abilityScores.dexterity = abilityScoresDto?.dexterity;
    abilityScores.constitution = abilityScoresDto?.constitution;
    abilityScores.intelligence = abilityScoresDto?.intelligence;
    abilityScores.wisdom = abilityScoresDto?.wisdom;
    abilityScores.charisma = abilityScoresDto?.charisma;

    return abilityScores;
  }

  deathSavesDtoToEntity(
    deathSavesDto: CharacterDeathSavesDto | null
  ): CharacterDeathSavesEntity {
    const deathSaves = new CharacterDeathSavesEntity();
    deathSaves.successes = deathSavesDto?.successes;
    deathSaves.failures = deathSavesDto?.failures;

    return deathSaves;
  }

  knownSpellsDtoToEntity(
    knownSpellsDto: CharacterKnownSpellsDto | null
  ): CharacterKnownSpellsEntity {
    const knownSpells = new CharacterKnownSpellsEntity();
    knownSpells["0"] = knownSpellsDto?.["0"];
    knownSpells["1"] = knownSpellsDto?.["1"];
    knownSpells["2"] = knownSpellsDto?.["2"];
    knownSpells["3"] = knownSpellsDto?.["3"];
    knownSpells["4"] = knownSpellsDto?.["4"];
    knownSpells["5"] = knownSpellsDto?.["5"];
    knownSpells["6"] = knownSpellsDto?.["6"];
    knownSpells["7"] = knownSpellsDto?.["7"];
    knownSpells["8"] = knownSpellsDto?.["8"];
    knownSpells["9"] = knownSpellsDto?.["9"];

    return knownSpells;
  }

  featuresAndTraitsDtoToEntity(
    featuresAndTraitsDto: CharacterFeatureAndTraitDto[] | null
  ): CharacterFeaturesAndTraitsEntity[] {
    return featuresAndTraitsDto
      ? featuresAndTraitsDto.map((fat) => this.featureAndTraitDtoToEntity(fat))
      : [];
  }

  featureAndTraitDtoToEntity(
    featureAndTraitDto: CharacterFeatureAndTraitDto
  ): CharacterFeaturesAndTraitsEntity {
    const newFat = new CharacterFeaturesAndTraitsEntity();
    newFat.index = featureAndTraitDto.index;
    newFat.title = featureAndTraitDto.title;
    newFat.body = featureAndTraitDto.body;

    return newFat;
  }

  treasureItemsDtoToEntity(
    treasureItemsDto: CharacterTreasureItemDto[] | null
  ): CharacterTreasureItemEntity[] {
    return treasureItemsDto
      ? treasureItemsDto.map((item) => this.treasureItemDtoToEntity(item))
      : [];
  }

  treasureItemDtoToEntity(
    treasureItemDto: CharacterTreasureItemDto
  ): CharacterTreasureItemEntity {
    const item = new CharacterTreasureItemEntity();
    item.name = treasureItemDto.name;
    item.quantity = treasureItemDto.quantity;
    item.weightInLbs = treasureItemDto.weightInLbs;
    item.bookmarked = treasureItemDto.bookmarked;
    item.magical = treasureItemDto.magical;
    item.description = treasureItemDto.description;

    return item;
  }

  treasureMoneyDtoToEntity(
    treasureMoneyDto: CharacterTreasureMoneyDto | null
  ): CharacterTreasureMoneyEntity {
    const treasureMoney = new CharacterTreasureMoneyEntity();
    treasureMoney.gold = treasureMoneyDto?.gold;
    treasureMoney.silver = treasureMoneyDto?.silver;
    treasureMoney.electrum = treasureMoneyDto?.electrum;
    treasureMoney.copper = treasureMoneyDto?.copper;

    return treasureMoney;
  }

  treasureDtoToEntity(
    treasureDto: CharacterTreasureDto | null
  ): CharacterTreasureEntity {
    const treasure = new CharacterTreasureEntity();
    treasure.money = this.treasureMoneyDtoToEntity(
      treasureDto?.money != undefined
        ? treasureDto.money
        : new CharacterTreasureMoneyDto()
    );
    treasure.items =
      treasureDto?.items != undefined
        ? this.treasureItemsDtoToEntity(treasureDto.items)
        : [];

    return treasure;
  }

  settingsDtoToEntity(
    settingsDto: CharacterSheetSettingsDto | null
  ): CharacterSheetSettingsEntity {
    const settings = new CharacterSheetSettingsEntity();
    settings.abilityScoreOnTop = settingsDto?.abilityScoreOnTop;

    return settings;
  }

  characterDataDtoToEntity(
    characterDto: CharacterDataDto
  ): CharacterDataEntity {
    const newCharacter = new CharacterDataEntity();
    newCharacter.username = characterDto.username;
    newCharacter.characterName = characterDto.characterName;
    newCharacter.level = characterDto.level;
    newCharacter.class = characterDto.class;
    newCharacter.background = characterDto.background;
    newCharacter.race = characterDto.race;
    newCharacter.spellcastingAbility = characterDto.spellcastingAbility;
    newCharacter.experience = characterDto.experience;
    newCharacter.proficiencyBonus = characterDto.proficiencyBonus;
    newCharacter.inspiration = characterDto.inspiration;
    newCharacter.armorClass = characterDto.armorClass;
    newCharacter.initiative = characterDto.initiative;
    newCharacter.speed = characterDto.speed;
    newCharacter.maxHp = characterDto.maxHp;
    newCharacter.tempHp = characterDto.tempHp;
    newCharacter.currentHp = characterDto.currentHp;
    newCharacter.hpHistory = characterDto.hpHistory;
    newCharacter.skillProficiencies = characterDto.skillProficiencies;
    newCharacter.savingThrowProficiencies =
      characterDto.savingThrowProficiencies;
    newCharacter.skillExpertise = characterDto.skillExpertise;
    newCharacter.generalProficiencies = characterDto.generalProficiencies;
    newCharacter.knownLanguages = characterDto.knownLanguages;
    newCharacter.toolAndOtherProficiencies =
      characterDto.toolAndOtherProficiencies;
    newCharacter.preparedSpells = characterDto.preparedSpells;
    newCharacter.hitDice = this.hitDiceDtoToEntity(characterDto.hitDice);
    newCharacter.abilityScores = this.abilityScoresDtoToEntity(
      characterDto.abilityScores
    );
    newCharacter.deathSaves = this.deathSavesDtoToEntity(
      characterDto.deathSaves
    );
    newCharacter.knownSpells = this.knownSpellsDtoToEntity(
      characterDto.knownSpells
    );
    newCharacter.featuresAndTraits = this.featuresAndTraitsDtoToEntity(
      characterDto.featuresAndTraits
    );
    newCharacter.treasure = this.treasureDtoToEntity(characterDto.treasure);
    newCharacter.settings = this.settingsDtoToEntity(characterDto.settings);
    newCharacter.spellSlots = this.spellSlotDtoToEntity(
      characterDto.spellSlots
    );

    return newCharacter;
  }

  private mergeCharacterEntitiesHelperOneToOne(
    primary: any,
    update: any,
    subfields: string[]
  ): void {
    subfields.forEach((subfield) => {
      console.log(update[subfield]);
      if (update[subfield] != undefined) {
        primary[subfield] = update[subfield];
      }
    });
  }

  private mergeCharacterEntitiesHelperOneToMany(
    primary: any,
    update: any,
    field: string
  ): void {
    primary[field] =
      update[field] != undefined || update[field].length != 0
        ? update[field]
        : primary[field];
  }

  mergeCharacterEntities(
    primaryCharacter: CharacterDataEntity,
    updateCharacter: CharacterDataEntity
  ): CharacterDataEntity {
    const spellSlotFields = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    Object.keys(updateCharacter).forEach((field) => {
      let subfields;
      switch (field) {
        case "hitDice":
        case "featuresAndTraits":
          this.mergeCharacterEntitiesHelperOneToMany(
            primaryCharacter,
            updateCharacter,
            field
          );
          break;
        case "abilityScores":
          subfields = [
            "strength",
            "dexterity",
            "constitution",
            "intelligence",
            "wisdom",
            "charisma",
          ];
          console.log(primaryCharacter[field]);
          console.log(updateCharacter[field]);
          this.mergeCharacterEntitiesHelperOneToOne(
            primaryCharacter[field],
            updateCharacter[field],
            subfields
          );
          console.log(primaryCharacter[field]);
          break;
        case "deathSaves":
          subfields = ["successes", "failures"];
          this.mergeCharacterEntitiesHelperOneToOne(
            primaryCharacter[field],
            updateCharacter[field],
            subfields
          );
          break;
        case "knownSpells":
          subfields = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          this.mergeCharacterEntitiesHelperOneToOne(
            primaryCharacter[field],
            updateCharacter[field],
            subfields
          );
          break;
        case "treasure":
          subfields = ["gold", "silver", "electrum", "copper"];
          this.mergeCharacterEntitiesHelperOneToMany(
            primaryCharacter[field],
            updateCharacter[field],
            "items"
          );
          this.mergeCharacterEntitiesHelperOneToOne(
            primaryCharacter[field],
            updateCharacter[field],
            subfields
          );
          break;
        case "settings":
          subfields = ["abilityScoreOnTop"];
          this.mergeCharacterEntitiesHelperOneToOne(
            primaryCharacter[field],
            updateCharacter[field],
            subfields
          );
          break;
        case "spellSlots":
          subfields = ["max", "used"];
          spellSlotFields.forEach((pf) => {
            this.mergeCharacterEntitiesHelperOneToOne(
              primaryCharacter[field][pf],
              updateCharacter[field][pf],
              subfields
            );
          });
          break;
        default:
          primaryCharacter[field] =
            updateCharacter[field] != undefined
              ? updateCharacter[field]
              : primaryCharacter[field];
      }
    });

    return primaryCharacter;
  }
}
