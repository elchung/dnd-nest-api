import {CharacterHitDiceDto} from "../dto/CharacterHitDice.dto";
import {CharacterHitDice} from "../entity/CharacterHitDice.entity";
import {CharacterData} from "../entity/CharacterData.entity";
import {CharacterSpellSlots} from "../entity/CharacterSpellSlots.entity";
import {CharacterSpellSlotsAtLevel} from "../entity/CharacterSpellSlotsAtLevel.entity";
import {CharacterSpellSlotsDto} from "../dto/CharacterSpellSlots.dto";
import {CharacterSpellSlotsAtLevelDto} from "../dto/CharacterSpellSlotsAtLevel.dto";
import {CharacterDataDto} from "../dto/CharacterData.dto";
import {CharacterAbilityScoresDto} from "../dto/CharacterAbilityScores.dto";
import {CharacterAbilityScores} from "../entity/CharacterAbilityScores.entity";
import {CharacterDeathSavesDto} from "../dto/CharacterDeathSaves.dto";
import {CharacterDeathSaves} from "../entity/CharacterDeathSaves.entity";
import {CharacterKnownSpellsDto} from "../dto/CharacterKnownSpells.dto";
import {CharacterKnownSpells} from "../entity/CharacterKnownSpells.entity";
import {CharacterFeatureAndTraitDto} from "../dto/CharacterFeatureAndTraitDto";
import {CharacterFeaturesAndTraits} from "../entity/CharacterFeaturesAndTraits.entity";
import {CharacterTreasureItemDto} from "../dto/CharacterTreasureItemDto";
import {CharacterTreasureItem} from "../entity/CharacterTreasureItem.entity";
import {CharacterTreasure} from "../entity/CharacterTreasure.entity";
import {CharacterTreasureMoneyDto} from "../dto/CharacterTreasureMoney.dto";
import {CharacterTreasureMoney} from "../entity/CharacterTreasureMoney.entity";
import {CharacterTreasureDto} from "../dto/CharacterTreasure.dto";
import {CharacterSheetSettingsDto} from "../dto/CharacterSheetSettings.dto";
import {CharacterSheetSettings} from "../entity/CharacterSheetSettings.entity";

export class CharacterMapper {
  hitDiceDtoToEntity(hitDiceDto: CharacterHitDiceDto[], parentCharacter: CharacterData): CharacterHitDice[] {
    return hitDiceDto?.map(hd => {
      const newHD = new CharacterHitDice()
      newHD.numDice = hd.numDice;
      newHD.diceType = hd.diceType;
      newHD.numUsed = hd.numUsed;
      newHD.character = parentCharacter;
      return newHD;
    });
  }

  spellSlotAtLevelDtoToEntity(spellSlotsAtLevelDto: CharacterSpellSlotsAtLevelDto, parentSpellSlotEntity: CharacterSpellSlots): CharacterSpellSlotsAtLevel {
    const spellSlotsAtLevel = new CharacterSpellSlotsAtLevel();
    spellSlotsAtLevel.used = spellSlotsAtLevelDto.used;
    spellSlotsAtLevel.max = spellSlotsAtLevelDto.max;
    spellSlotsAtLevel.characterSpellSlots = parentSpellSlotEntity;

    return spellSlotsAtLevel;
  }

  spellSlotDtoToEntity(spellSlotDto: CharacterSpellSlotsDto, parentCharacter: CharacterData): CharacterSpellSlots {
    const spellSlots = new CharacterSpellSlots();
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
      .forEach(level => {
        spellSlots[level] = this.spellSlotAtLevelDtoToEntity(spellSlotDto[level], spellSlots);
      })
    return spellSlots;
  }

  abilityScoresDtoToEntity(abilityScoresDto: CharacterAbilityScoresDto, parentCharacter: CharacterData): CharacterAbilityScores {
    const abilityScores = new CharacterAbilityScores();
    abilityScores.strength = abilityScoresDto.strength;
    abilityScores.dexterity = abilityScoresDto.dexterity;
    abilityScores.constitution = abilityScoresDto.constitution;
    abilityScores.intelligence = abilityScoresDto.intelligence;
    abilityScores.wisdom = abilityScoresDto.wisdom;
    abilityScores.charisma = abilityScoresDto.charisma;
    abilityScores.character = parentCharacter;

    return abilityScores;
  }

  deathSavesDtoToEntity(deathSavesDto: CharacterDeathSavesDto, parentCharacter: CharacterData): CharacterDeathSaves {
    const deathSaves = new CharacterDeathSaves();
    deathSaves.successes = deathSavesDto.successes;
    deathSaves.failures = deathSavesDto.failures;
    deathSaves.character = parentCharacter;

    return deathSaves;
  }

  knownSpellsDtoToEntity(knownSpellsDto: CharacterKnownSpellsDto, parentCharacter: CharacterData): CharacterKnownSpells {
    const knownSpells = new CharacterKnownSpells();
    knownSpells.zero = knownSpellsDto.zero;
    knownSpells.one = knownSpellsDto.one;
    knownSpells.two = knownSpellsDto.two;
    knownSpells.three = knownSpellsDto.three;
    knownSpells.four = knownSpellsDto.four;
    knownSpells.five = knownSpellsDto.five;
    knownSpells.six = knownSpellsDto.six;
    knownSpells.seven = knownSpellsDto.seven;
    knownSpells.eight = knownSpellsDto.eight;
    knownSpells.nine = knownSpellsDto.nine;
    knownSpells.character = parentCharacter;

    return knownSpells;
  }

  featuresAndTraitsDtoToEntity(featuresAndTraitsDto: CharacterFeatureAndTraitDto[], parentCharacter: CharacterData): CharacterFeaturesAndTraits[] {
    return featuresAndTraitsDto.map(fat => this.featureAndTraitDtoToEntity(fat, parentCharacter));
  }

  featureAndTraitDtoToEntity(featureAndTraitDto: CharacterFeatureAndTraitDto, parentCharacter: CharacterData): CharacterFeaturesAndTraits {
    const newFat = new CharacterFeaturesAndTraits();
    newFat.index = featureAndTraitDto.index;
    newFat.title = featureAndTraitDto.title;
    newFat.body = featureAndTraitDto.body;
    newFat.character = parentCharacter;

    return newFat;
  }

  treasureItemsDtoToEntity(treasureItemsDto: CharacterTreasureItemDto[], parentTreasure: CharacterTreasure): CharacterTreasureItem[] {
    return  treasureItemsDto.map(item => this.treasureItemDtoToEntity(item, parentTreasure))
  }

  treasureItemDtoToEntity(treasureItemDto: CharacterTreasureItemDto, parentTreasure: CharacterTreasure): CharacterTreasureItem {
    const item = new CharacterTreasureItem();
    item.name = treasureItemDto.name;
    item.quantity = treasureItemDto.quantity;
    item.weightInLbs = treasureItemDto.weightInLbs;
    item.bookmarked = treasureItemDto.bookmarked;
    item.magical = treasureItemDto.magical;
    item.description = treasureItemDto.description;
    item.parentTreasure = parentTreasure;

    return item;
  }

  treasureMoneyDtoToEntity(treasureMoneyDto: CharacterTreasureMoneyDto, parentTreasure: CharacterTreasure): CharacterTreasureMoney {
    const treasureMoney = new CharacterTreasureMoney();
    treasureMoney.gold = treasureMoneyDto.gold;
    treasureMoney.silver = treasureMoneyDto.silver;
    treasureMoney.electrum = treasureMoneyDto.electrum;
    treasureMoney.copper = treasureMoneyDto.copper;

    return treasureMoney
  }

  treasureDtoToEntity(treasureDto: CharacterTreasureDto, parentCharacter: CharacterData): CharacterTreasure {
    const treasure = new CharacterTreasure();
    treasure.money = this.treasureMoneyDtoToEntity(treasureDto.money ? treasureDto.money : new CharacterTreasureMoneyDto(), treasure);
    treasure.items = treasureDto.items ? this.treasureItemsDtoToEntity(treasureDto.items, treasure) : [];
    treasure.character = parentCharacter;

    return treasure;
  }

  settingsDtoToEntity(settingsDto: CharacterSheetSettingsDto, parentCharacter: CharacterData): CharacterSheetSettings {
    const settings = new CharacterSheetSettings();
    settings.abilityScoreOnTop = settingsDto.abilityScoreOnTop;
    settings.character = parentCharacter;

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
    newCharacter.savingThrowProficiencies = characterDto.savingThrowProficiencies;
    newCharacter.skillExpertise = characterDto.skillExpertise;
    newCharacter.generalProficiencies = characterDto.generalProficiencies;
    newCharacter.knownLanguages = characterDto.knownLanguages;
    newCharacter.toolAndOtherProficiencies = characterDto.toolAndOtherProficiencies;
    newCharacter.preparedSpells = characterDto.preparedSpells;
    newCharacter.hitDice = this.hitDiceDtoToEntity(characterDto.hitDice, newCharacter);
    newCharacter.abilityScores = this.abilityScoresDtoToEntity(characterDto.abilityScores, newCharacter);
    newCharacter.deathSaves = this.deathSavesDtoToEntity(characterDto.deathSaves, newCharacter);
    newCharacter.knownSpells = this.knownSpellsDtoToEntity(characterDto.knownSpells, newCharacter);
    newCharacter.featuresAndTraits = this.featuresAndTraitsDtoToEntity(characterDto.featuresAndTraits, newCharacter);
    newCharacter.treasure = this.treasureDtoToEntity(characterDto.treasure, newCharacter);
    newCharacter.settings = this.settingsDtoToEntity(characterDto.settings, newCharacter);

    return newCharacter
  }
}
