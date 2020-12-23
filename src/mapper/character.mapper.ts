import { CharacterHitDiceDto } from "../dto/CharacterHitDice.dto";
import { CharacterHitDice } from "../entity/CharacterHitDice.entity";
import { CharacterData } from "../entity/CharacterData.entity";
import { CharacterSpellSlots } from "../entity/CharacterSpellSlots.entity";
import { CharacterSpellSlotsAtLevel } from "../entity/CharacterSpellSlotsAtLevel.entity";
import { CharacterSpellSlotsDto } from "../dto/CharacterSpellSlots.dto";
import { CharacterSpellSlotsAtLevelDto } from "../dto/CharacterSpellSlotsAtLevel.dto";
import { CharacterDataDto } from "../dto/CharacterData.dto";
import { CharacterAbilityScoresDto } from "../dto/CharacterAbilityScores.dto";
import { CharacterAbilityScores } from "../entity/CharacterAbilityScores.entity";
import { CharacterDeathSavesDto } from "../dto/CharacterDeathSaves.dto";
import { CharacterDeathSaves } from "../entity/CharacterDeathSaves.entity";
import { CharacterKnownSpellsDto } from "../dto/CharacterKnownSpells.dto";
import { CharacterKnownSpells } from "../entity/CharacterKnownSpells.entity";
import { CharacterFeatureAndTraitDto } from "../dto/CharacterFeatureAndTraitDto";
import { CharacterFeaturesAndTraits } from "../entity/CharacterFeaturesAndTraits.entity";
import { CharacterTreasureItemDto } from "../dto/CharacterTreasureItemDto";
import { CharacterTreasureItem } from "../entity/CharacterTreasureItem.entity";
import { CharacterTreasure } from "../entity/CharacterTreasure.entity";
import { CharacterTreasureMoneyDto } from "../dto/CharacterTreasureMoney.dto";
import { CharacterTreasureMoney } from "../entity/CharacterTreasureMoney.entity";
import { CharacterTreasureDto } from "../dto/CharacterTreasure.dto";
import { CharacterSheetSettingsDto } from "../dto/CharacterSheetSettings.dto";
import { CharacterSheetSettings } from "../entity/CharacterSheetSettings.entity";

export class CharacterMapper {
  hitDieDtoToEntity(hitDieDto: CharacterHitDiceDto | null): CharacterHitDice {
    const newHD = new CharacterHitDice();
    newHD.numDice = hitDieDto.numDice;
    newHD.diceType = hitDieDto.diceType;
    newHD.numUsed = hitDieDto.numUsed;

    return newHD;
  }

  hitDiceDtoToEntity(
    hitDiceDto: CharacterHitDiceDto[] | null
  ): CharacterHitDice[] {
    return hitDiceDto
      ? hitDiceDto?.map((hd) => this.hitDieDtoToEntity(hd))
      : [];
  }

  spellSlotAtLevelDtoToEntity(
    spellSlotsAtLevelDto: CharacterSpellSlotsAtLevelDto | null
  ): CharacterSpellSlotsAtLevel {
    const spellSlotsAtLevel = new CharacterSpellSlotsAtLevel();
    spellSlotsAtLevel.used = spellSlotsAtLevelDto?.used || 0;
    spellSlotsAtLevel.max = spellSlotsAtLevelDto?.max || 0;

    return spellSlotsAtLevel;
  }

  spellSlotDtoToEntity(
    spellSlotDto: CharacterSpellSlotsDto | null
  ): CharacterSpellSlots {
    const spellSlots = new CharacterSpellSlots();
    [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].forEach((level) => {
      spellSlots[level] = this.spellSlotAtLevelDtoToEntity(spellSlotDto[level]);
    });
    return spellSlots;
  }

  abilityScoresDtoToEntity(
    abilityScoresDto: CharacterAbilityScoresDto | null
  ): CharacterAbilityScores {
    const abilityScores = new CharacterAbilityScores();
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
  ): CharacterDeathSaves {
    const deathSaves = new CharacterDeathSaves();
    deathSaves.successes = deathSavesDto?.successes;
    deathSaves.failures = deathSavesDto?.failures;

    return deathSaves;
  }

  knownSpellsDtoToEntity(
    knownSpellsDto: CharacterKnownSpellsDto | null
  ): CharacterKnownSpells {
    const knownSpells = new CharacterKnownSpells();
    knownSpells.zero = knownSpellsDto?.zero;
    knownSpells.one = knownSpellsDto?.one;
    knownSpells.two = knownSpellsDto?.two;
    knownSpells.three = knownSpellsDto?.three;
    knownSpells.four = knownSpellsDto?.four;
    knownSpells.five = knownSpellsDto?.five;
    knownSpells.six = knownSpellsDto?.six;
    knownSpells.seven = knownSpellsDto?.seven;
    knownSpells.eight = knownSpellsDto?.eight;
    knownSpells.nine = knownSpellsDto?.nine;

    return knownSpells;
  }

  featuresAndTraitsDtoToEntity(
    featuresAndTraitsDto: CharacterFeatureAndTraitDto[] | null
  ): CharacterFeaturesAndTraits[] {
    return featuresAndTraitsDto
      ? featuresAndTraitsDto.map((fat) => this.featureAndTraitDtoToEntity(fat))
      : [];
  }

  featureAndTraitDtoToEntity(
    featureAndTraitDto: CharacterFeatureAndTraitDto
  ): CharacterFeaturesAndTraits {
    const newFat = new CharacterFeaturesAndTraits();
    newFat.index = featureAndTraitDto.index;
    newFat.title = featureAndTraitDto.title;
    newFat.body = featureAndTraitDto.body;

    return newFat;
  }

  treasureItemsDtoToEntity(
    treasureItemsDto: CharacterTreasureItemDto[] | null
  ): CharacterTreasureItem[] {
    return treasureItemsDto
      ? treasureItemsDto.map((item) => this.treasureItemDtoToEntity(item))
      : [];
  }

  treasureItemDtoToEntity(
    treasureItemDto: CharacterTreasureItemDto
  ): CharacterTreasureItem {
    const item = new CharacterTreasureItem();
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
  ): CharacterTreasureMoney {
    console.log("getting treasure");
    const treasureMoney = new CharacterTreasureMoney();
    treasureMoney.gold = treasureMoneyDto?.gold;
    treasureMoney.silver = treasureMoneyDto?.silver;
    treasureMoney.electrum = treasureMoneyDto?.electrum;
    treasureMoney.copper = treasureMoneyDto?.copper;

    return treasureMoney;
  }

  treasureDtoToEntity(
    treasureDto: CharacterTreasureDto | null
  ): CharacterTreasure {
    const treasure = new CharacterTreasure();
    console.log("here", treasure.money);
    treasure.money = this.treasureMoneyDtoToEntity(
      treasureDto?.money ? treasureDto.money : new CharacterTreasureMoneyDto()
    );
    treasure.items = treasureDto.items
      ? this.treasureItemsDtoToEntity(treasureDto.items)
      : [];

    return treasure;
  }

  settingsDtoToEntity(
    settingsDto: CharacterSheetSettingsDto | null
  ): CharacterSheetSettings {
    const settings = new CharacterSheetSettings();
    settings.abilityScoreOnTop = settingsDto?.abilityScoreOnTop;

    return settings;
  }

  characterDataDtoToEntity(characterDto: CharacterDataDto): CharacterData {
    const newCharacter = new CharacterData();
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

  private mergeCharacterEntitiesHelper_oneToOne(
    primaryCharacter: any,
    updateCharacter: any,
    field: string,
    subfields: string[]
  ): void {
    subfields.forEach((subfield) => {
      primaryCharacter[field][subfield] =
        updateCharacter[field][subfield] || primaryCharacter[field][subfield];
    });
  }

  private mergeCharacterEntitiesHelper_oneToMany(
    primaryCharacter: any,
    updateCharacter: any,
    field: string
  ): void {
    primaryCharacter[field] =
      updateCharacter[field] != undefined || updateCharacter[field].length != 0
        ? updateCharacter[field]
        : primaryCharacter[field];
  }

  mergeCharacterEntities(
    primaryCharacter: CharacterData,
    updateCharacter: CharacterData
  ): CharacterData {
    const spellSlotFields = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    Object.keys(updateCharacter).forEach((field) => {
      let subfields;
      switch (field) {
        case "hitDice":
        case "featuresAndTraits":
          this.mergeCharacterEntitiesHelper_oneToMany(
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
          this.mergeCharacterEntitiesHelper_oneToOne(
            primaryCharacter,
            updateCharacter,
            field,
            subfields
          );
          break;
        case "deathSaves":
          subfields = ["successes", "failures"];
          this.mergeCharacterEntitiesHelper_oneToOne(
            primaryCharacter,
            updateCharacter,
            field,
            subfields
          );
          break;
        case "knownSpells":
          subfields = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
          ];
          this.mergeCharacterEntitiesHelper_oneToOne(
            primaryCharacter,
            updateCharacter,
            field,
            subfields
          );
          break;
        case "treasure":
          subfields = ["gold", "silver", "electrum", "copper"];
          this.mergeCharacterEntitiesHelper_oneToMany(
            primaryCharacter.treasure,
            updateCharacter.treasure,
            "items"
          );
          this.mergeCharacterEntitiesHelper_oneToOne(
            primaryCharacter.treasure,
            updateCharacter.treasure,
            field,
            subfields
          );
          break;
        case "settings":
          subfields = ["abilityScoreOnTop"];
          this.mergeCharacterEntitiesHelper_oneToOne(
            primaryCharacter,
            updateCharacter,
            field,
            subfields
          );
          break;
        case "spellSlots":
          subfields = ["max", "used"];
          spellSlotFields.forEach((pf) => {
            this.mergeCharacterEntitiesHelper_oneToOne(
              primaryCharacter[field],
              updateCharacter[field],
              pf,
              subfields
            );
          });
          break;
        default:
          primaryCharacter[field] =
            updateCharacter[field] || primaryCharacter[field];
      }
    });

    return primaryCharacter;
  }
}
