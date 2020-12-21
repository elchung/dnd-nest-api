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
  hitDieDtoToEntity(hitDieDto: CharacterHitDiceDto): CharacterHitDice {
    const newHD = new CharacterHitDice()
    newHD.numDice = hitDieDto.numDice;
    newHD.diceType = hitDieDto.diceType;
    newHD.numUsed = hitDieDto.numUsed;

    return newHD;
  }

  hitDiceDtoToEntity(hitDiceDto: CharacterHitDiceDto[]): CharacterHitDice[] {
    return hitDiceDto?.map(hd => this.hitDieDtoToEntity(hd));
  }

  spellSlotAtLevelDtoToEntity(spellSlotsAtLevelDto: CharacterSpellSlotsAtLevelDto): CharacterSpellSlotsAtLevel {
    const spellSlotsAtLevel = new CharacterSpellSlotsAtLevel();
    spellSlotsAtLevel.used = spellSlotsAtLevelDto?.used || 0;
    spellSlotsAtLevel.max = spellSlotsAtLevelDto?.max || 0;

    return spellSlotsAtLevel;
  }

  spellSlotDtoToEntity(spellSlotDto: CharacterSpellSlotsDto): CharacterSpellSlots {
    const spellSlots = new CharacterSpellSlots();
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
      .forEach(level => {
        spellSlots[level] = this.spellSlotAtLevelDtoToEntity(spellSlotDto[level]);
      })
    return spellSlots;
  }

  abilityScoresDtoToEntity(abilityScoresDto: CharacterAbilityScoresDto): CharacterAbilityScores {
    const abilityScores = new CharacterAbilityScores();
    abilityScores.strength = abilityScoresDto?.strength;
    abilityScores.dexterity = abilityScoresDto?.dexterity;
    abilityScores.constitution = abilityScoresDto?.constitution;
    abilityScores.intelligence = abilityScoresDto?.intelligence;
    abilityScores.wisdom = abilityScoresDto?.wisdom;
    abilityScores.charisma = abilityScoresDto?.charisma;

    return abilityScores;
  }

  deathSavesDtoToEntity(deathSavesDto: CharacterDeathSavesDto): CharacterDeathSaves {
    const deathSaves = new CharacterDeathSaves();
    deathSaves.successes = deathSavesDto?.successes || 0;
    deathSaves.failures = deathSavesDto?.failures || 0;

    return deathSaves;
  }

  knownSpellsDtoToEntity(knownSpellsDto: CharacterKnownSpellsDto): CharacterKnownSpells {
    const knownSpells = new CharacterKnownSpells();
    knownSpells.zero = knownSpellsDto?.zero || [];
    knownSpells.one = knownSpellsDto?.one || [];
    knownSpells.two = knownSpellsDto?.two || [];
    knownSpells.three = knownSpellsDto?.three || [];
    knownSpells.four = knownSpellsDto?.four || [];
    knownSpells.five = knownSpellsDto?.five || [];
    knownSpells.six = knownSpellsDto?.six || [];
    knownSpells.seven = knownSpellsDto?.seven || [];
    knownSpells.eight = knownSpellsDto?.eight || [];
    knownSpells.nine = knownSpellsDto?.nine || [];

    return knownSpells;
  }

  featuresAndTraitsDtoToEntity(featuresAndTraitsDto: CharacterFeatureAndTraitDto[]): CharacterFeaturesAndTraits[] {
    return featuresAndTraitsDto.map(fat => this.featureAndTraitDtoToEntity(fat));
  }

  featureAndTraitDtoToEntity(featureAndTraitDto: CharacterFeatureAndTraitDto): CharacterFeaturesAndTraits {
    const newFat = new CharacterFeaturesAndTraits();
    newFat.index = featureAndTraitDto.index;
    newFat.title = featureAndTraitDto.title;
    newFat.body = featureAndTraitDto.body;

    return newFat;
  }

  treasureItemsDtoToEntity(treasureItemsDto: CharacterTreasureItemDto[]): CharacterTreasureItem[] {
    return  treasureItemsDto.map(item => this.treasureItemDtoToEntity(item))
  }

  treasureItemDtoToEntity(treasureItemDto: CharacterTreasureItemDto): CharacterTreasureItem {
    const item = new CharacterTreasureItem();
    item.name = treasureItemDto.name;
    item.quantity = treasureItemDto.quantity;
    item.weightInLbs = treasureItemDto.weightInLbs;
    item.bookmarked = treasureItemDto.bookmarked;
    item.magical = treasureItemDto.magical;
    item.description = treasureItemDto.description;

    return item;
  }

  treasureMoneyDtoToEntity(treasureMoneyDto: CharacterTreasureMoneyDto): CharacterTreasureMoney {
    const treasureMoney = new CharacterTreasureMoney();
    treasureMoney.gold = treasureMoneyDto.gold;
    treasureMoney.silver = treasureMoneyDto.silver;
    treasureMoney.electrum = treasureMoneyDto.electrum;
    treasureMoney.copper = treasureMoneyDto.copper;

    return treasureMoney
  }

  treasureDtoToEntity(treasureDto: CharacterTreasureDto): CharacterTreasure {
    const treasure = new CharacterTreasure();
    treasure.money = this.treasureMoneyDtoToEntity(treasureDto.money ? treasureDto.money : new CharacterTreasureMoneyDto());
    treasure.items = treasureDto.items ? this.treasureItemsDtoToEntity(treasureDto.items) : [];

    return treasure;
  }

  settingsDtoToEntity(settingsDto: CharacterSheetSettingsDto): CharacterSheetSettings {
    const settings = new CharacterSheetSettings();
    settings.abilityScoreOnTop = settingsDto.abilityScoreOnTop;

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
    newCharacter.hitDice = this.hitDiceDtoToEntity(characterDto.hitDice);
    newCharacter.abilityScores = this.abilityScoresDtoToEntity(characterDto.abilityScores);
    newCharacter.deathSaves = this.deathSavesDtoToEntity(characterDto.deathSaves);
    newCharacter.knownSpells = this.knownSpellsDtoToEntity(characterDto.knownSpells);
    newCharacter.featuresAndTraits = this.featuresAndTraitsDtoToEntity(characterDto.featuresAndTraits);
    newCharacter.treasure = this.treasureDtoToEntity(characterDto.treasure);
    newCharacter.settings = this.settingsDtoToEntity(characterDto.settings);
    newCharacter.spellSlots = this.spellSlotDtoToEntity(characterDto.spellSlots);

    return newCharacter
  }
}
