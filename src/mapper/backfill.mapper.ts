import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDcEntity } from "../entity/spells/SpellDc.entity";
import { SpellAreaOfEffectEntity } from "../entity/spells/SpellAreaOfEffect.entity";
import { FeatureEntity } from "../entity/features/feature.entity";
import { PrerequisiteEntity } from "../entity/features/prerequisite.entity";
import { TraitEntity } from "../entity/general/Trait.entity";
import { OptionsEntity } from "../entity/general/Options.entity";
import { RaceEntity } from "../entity/races/Race.entity";
import { ClassEntity } from "../entity/classes/Class.entity";
import { SubraceEntity } from "../entity/subraces/Subrace.entity";
import { AbilityScoreBonusEntity } from "src/entity/general/AbilityScoreBonus.entity";
import { SubclassEntity } from "../entity/subclasses/Subclass.entity";
import { SubclassSpellEntity } from "../entity/subclasses/SubclassSpell.entity";
import { LevelSubclassEntity } from "src/entity/levels/LevelSubclass.entity";
import { LevelClassEntity } from "src/entity/levels/LevelClass.entity";
import { LevelClassSpecificEntity } from "src/entity/levels/LevelClassSpecific.entity";
import { LevelOptionsDiceEntity } from "src/entity/levels/LevelOptionsDice.entity";
import { LevelClassCreatingSpellSlotsEntity } from "src/entity/levels/LevelClassCreatingSpellSlots.entity";
import { LevelSpellcastingEntity } from "src/entity/levels/LevelSpellcasting.entity";
import { StartingEquipmentEntity } from "src/entity/items/startingEquipment/StartingEquipment.entity";
import { StartingEquipmentEquipmentEntity } from "src/entity/items/startingEquipment/StartingEquipmentEquipment.entity";
import { StartingEquipmentOptionChoicesEntity } from "src/entity/items/startingEquipment/StartingEquipmentOptionChoices.entity";
import { StartingEquipmentOptionsEntity } from "src/entity/items/startingEquipment/StartingEquipmentOptions.entity";
import { ClassSpellcastingEntity } from "src/entity/classes/ClassSpellcasting.entity";
import { InfoEntity } from "src/entity/general/Info.entity";

export class BackfillMapper {
  featureResponseToEntity(feature: any): FeatureEntity {
    const featureEntity = new FeatureEntity();
    featureEntity.name = feature.name;
    featureEntity.class = feature.class;
    featureEntity.subclass = feature.subclass;
    featureEntity.level = feature.level;
    featureEntity.group = feature.group;
    featureEntity.description = feature.desc;
    featureEntity.choice = this.optionsDataToEntity(feature.choice);
    if (feature.prerequisites != null) {
      featureEntity.prerequisites = feature.prerequisites?.map((prereq) => {
        const prerequisite = new PrerequisiteEntity();
        prerequisite.name = prereq.name;
        prerequisite.type = prereq.type;
        return prerequisite;
      });
    }

    return featureEntity;
  }

  spellResponseToEntity(spell: any): SpellEntity {
    const spellEntity = new SpellEntity();
    spellEntity.castingTime = spell.castingTime;
    spellEntity.classes = spell.classes?.map((classObj) => classObj.name);
    spellEntity.components = spell.components;
    spellEntity.concentration = spell.concentration;
    spellEntity.duration = spell.duration;
    spellEntity.higherLevel = spell.higherLevel;
    spellEntity.description = spell.desc;
    spellEntity.name = spell.name;
    spellEntity.range = spell.range;
    spellEntity.materials = spell.material;
    spellEntity.ritual = spell.ritual;
    spellEntity.level = spell.level;
    spellEntity.attackType = spell.attackType;
    spellEntity.school = spell.school.name;

    if (spell.damage != null) {
      const spellDamageAtLevel = new SpellDamageAtLevelEntity();
      const spellDamageEntity = new SpellDamageEntity();
      spellDamageAtLevel["1"] = spell.damage.damageAtSlotLevel?.["1"];
      spellDamageAtLevel["2"] = spell.damage.damageAtSlotLevel?.["2"];
      spellDamageAtLevel["3"] = spell.damage.damageAtSlotLevel?.["3"];
      spellDamageAtLevel["4"] = spell.damage.damageAtSlotLevel?.["4"];
      spellDamageAtLevel["5"] = spell.damage.damageAtSlotLevel?.["5"];
      spellDamageAtLevel["6"] = spell.damage.damageAtSlotLevel?.["6"];
      spellDamageAtLevel["7"] = spell.damage.damageAtSlotLevel?.["7"];
      spellDamageAtLevel["8"] = spell.damage.damageAtSlotLevel?.["8"];
      spellDamageAtLevel["9"] = spell.damage.damageAtSlotLevel?.["9"];
      // spellDamageAtLevel.parentSpellDamage = spellDamageEntity;
      spellDamageEntity.type = spell.damage.damageType.name;
      spellDamageEntity.atLevel = spellDamageAtLevel;
      // spellDamageEntity.parentSpell = spellEntity;
      spellEntity.damage = spellDamageEntity;
    }

    if (spell.dc != null) {
      const spellDcEntity = new SpellDcEntity();
      spellDcEntity.dcSuccess = spell.dc.dcSuccess;
      spellDcEntity.dcType = spell.dc.dcType.name;
      spellEntity.dc = spellDcEntity;
      // spellDcEntity.parentSpell = spellEntity;
    }

    if (spell.areaOfEffect != null) {
      const spellAreaOfEffectEntity = new SpellAreaOfEffectEntity();
      spellAreaOfEffectEntity.size = spell.areaOfEffect.size;
      spellAreaOfEffectEntity.type = spell.areaOfEffect.type;
      spellEntity.areaOfEffect = spellAreaOfEffectEntity;
      // spellAreaOfEffectEntity.parentSpell = spellEntity;
    }

    return spellEntity;
  }

  traitResponseToEntity(trait: any): TraitEntity {
    const traitEntity = new TraitEntity();
    traitEntity.name = trait.name;
    traitEntity.subraces = trait.subraces?.map((subraceObj) => subraceObj.name);
    traitEntity.races = trait.races?.map((raceObj) => raceObj.name);
    traitEntity.description = trait.desc;
    traitEntity.proficiencies = trait.proficiencies;

    traitEntity.proficiencyChoices = trait.proficiency_choices?.map(
      (choice) => {
        const optionsEntity = new OptionsEntity();
        optionsEntity.choose = choice.choose;
        optionsEntity.from = choice.from?.map((choiceFrom) => choiceFrom.name);
        return optionsEntity;
      }
    );

    return traitEntity;
  }

  raceResponseToEntity(race: any): RaceEntity {
    const raceEntity = new RaceEntity();
    raceEntity.name = race.name;
    raceEntity.speed = race.speed;
    raceEntity.alignment = race.alignment;
    raceEntity.age = race.age;
    raceEntity.size = race.size;
    raceEntity.sizeDescription = race.size_description;
    raceEntity.startingProficiencies = race.starting_proficiencies?.map(
      (startingProf) => startingProf.name
    );
    raceEntity.startingProficiencyOptions = this.optionsDataToEntity(
      race.starting_proficiency_options
    );
    raceEntity.languages = race.languages?.map((language) => language.name);
    raceEntity.languageOptions = this.optionsDataToEntity(
      race.language_options
    );
    raceEntity.languageDescription = race.language_desc;
    raceEntity.traits = race.traits?.map((trait) => trait.name);
    raceEntity.traitOptions = this.optionsDataToEntity(race.trait_options);
    raceEntity.abilityBonuses = race.ability_bonuses?.map((bonus) =>
      this.abilityBonusDataToEntity(bonus)
    );
    raceEntity.abilityBonusOptions = this.optionsDataToEntity(
      race.ability_bonus_options
    );
    raceEntity.subraces = race.subraces?.map((subrace) => subrace.name);
    return raceEntity;
  }

  subraceResponseToEntity(subrace: any): SubraceEntity {
    const subraceEntity = new SubraceEntity();
    subraceEntity.name = subrace.name;
    subraceEntity.race = subrace.race.name;
    subraceEntity.description = subrace.desc;
    subraceEntity.abilityScoreBonuses = subrace.ability_bonuses?.map(
      (bonus) => bonus.name
    );
    subraceEntity.startingProficiencies = subrace.starting_proficiencies?.map(
      (startProf) => startProf.name
    );
    subraceEntity.languages = subrace.languages?.map(
      (language) => language.name
    );
    subraceEntity.languageOptions = this.optionsDataToEntity(
      subrace.language_options
    );
    subraceEntity.racialTraits = subrace.racial_traits?.map(
      (trait) => trait.name
    );
    subraceEntity.racialTraitOptions = this.optionsDataToEntity(
      subrace.racial_trait_options
    );
    return subraceEntity;
  }

  classResponseToEntity(
    classData: any,
    classLevelData: any,
    startingEquipment: any
  ): ClassEntity {
    const classEntity = new ClassEntity();
    classEntity.classLevels = classLevelData.map((data) =>
      this.classLevelDataToEntity(data)
    );
    classEntity.hitDie = classData.hit_die;
    classEntity.name = classData.name;
    classEntity.proficiencies = classData.proficiencies?.map(
      (proficiency) => proficiency.name
    );
    classEntity.proficiencyChoices = this.optionsDataToEntity(
      classData.proficiency_choices
    );
    classEntity.savingThrows = classData.saving_throws?.map(
      (throws) => throws.name
    );
    classEntity.spellcasting = this.classSpellcastingDataToEntity(
      classData.spellcasting
    );
    classEntity.startingEquipment = this.startingEquipmentDataToEntity(
      startingEquipment
    );
    classEntity.subclasses = classData.subclasses?.map(
      (subclass) => subclass.name
    );
    return classEntity;
  }

  classSpellcastingDataToEntity(data: any): ClassSpellcastingEntity {
    const classSpellcastingEntity = new ClassSpellcastingEntity();
    classSpellcastingEntity.level = data.level;
    classSpellcastingEntity.spellcastingAbility = data.spellcasting_ability;
    classSpellcastingEntity.info = data.info.map?.((info) =>
      this.infoDataToEntity(info)
    );
    return classSpellcastingEntity;
  }

  infoDataToEntity(data: any): InfoEntity {
    const infoEntity = new InfoEntity();
    infoEntity.description = data.desc;
    infoEntity.name = data.name;
    return infoEntity;
  }

  subclassResponseToEntity(
    subclass: any,
    subclassLevelData: any
  ): SubclassEntity {
    const subclassEntity = new SubclassEntity();
    subclassEntity.class = subclass.class.name;
    subclassEntity.name = subclass.name;
    subclassEntity.subclassFlavor = subclass.subclass_flavor;
    subclassEntity.description = subclass.desc;
    subclassEntity.spells = subclass.spells?.map((spell) =>
      this.subclassSpellDataToEntity(spell)
    );
    subclassEntity.subclassLevels = this.classLevelDataToEntity(
      subclassLevelData
    );
    return subclassEntity;
  }

  startingEquipmentDataToEntity(data: any): StartingEquipmentEntity {
    const startingEqupmentEntity = new StartingEquipmentEntity();
    startingEqupmentEntity.class = data.class;
    startingEqupmentEntity.startingEquipment = data.starting_equipment?.map(
      (equipment) => this.startingEquipmentEquipmentDataToEntity(equipment)
    );
    startingEqupmentEntity.startingEquipmentOptions = data.starting_equipment_options?.map(
      (option) => this.equipmentOptionsDataToEntity(option)
    );
    return startingEqupmentEntity;
  }

  equipmentOptionsDataToEntity(data: any): StartingEquipmentOptionsEntity {
    const startingEquipmentOptionsEntity = new StartingEquipmentOptionsEntity();
    startingEquipmentOptionsEntity.choose = data.choose;
    startingEquipmentOptionsEntity.type = data.type;
    startingEquipmentOptionsEntity.from = data.from?.map((option) =>
      this.equipmentOptionChoicesDataToEntity(option)
    );
    return startingEquipmentOptionsEntity;
  }

  equipmentOptionChoicesDataToEntity(
    data: any
  ): StartingEquipmentOptionChoicesEntity {
    const startingEquipmentOptionChoicesEntity = new StartingEquipmentOptionChoicesEntity();
    startingEquipmentOptionChoicesEntity.equipment = data.equipment.name;
    startingEquipmentOptionChoicesEntity.quantity = data.quantity;
    return startingEquipmentOptionChoicesEntity;
  }

  startingEquipmentEquipmentDataToEntity(
    data: any
  ): StartingEquipmentEquipmentEntity {
    const equipmentEquipment = new StartingEquipmentEquipmentEntity();
    equipmentEquipment.equipment = data.equipment.name;
    equipmentEquipment.quantity = data.quantity;
    return equipmentEquipment;
  }

  classLevelDataToEntity(data: any): LevelClassEntity {
    if (!data) {
      return;
    }
    const levelEntity = new LevelClassEntity();
    levelEntity.level = data.level;
    levelEntity.featureChoices = data.feature_choices?.map(
      (choice) => choice.name
    );
    levelEntity.features = data.features?.map((feature) => feature.name);
    levelEntity.class = data.class.name;
    levelEntity.subclass = data.subclass.name;
    levelEntity.classSpecific = this.classSpecificDataToEntity(
      data.class_specific
    );
    levelEntity.proficiencyBonus = data.prof_bonus;
    levelEntity.spellcasting = this.levelSpellcastingDataToEntity(
      data.spellcasting
    );
    levelEntity.subclassSpecific = this.subclassSpecificDataToEntity(
      data.subclass_specific
    );
    return levelEntity;
  }

  subclassSpecificDataToEntity(data: any): LevelSubclassEntity {
    if (!data) {
      return;
    }
    const levelSubclassEntity = new LevelSubclassEntity();
    levelSubclassEntity.additionalMagicalSecretsMaxLvl =
      data.additional_magical_secrets_max_lvl;
    levelSubclassEntity.auraRange = data.aura_range;
    return levelSubclassEntity;
  }

  levelSpellcastingDataToEntity(data: any): LevelSpellcastingEntity {
    if (!data) {
      return;
    }
    const levelSpellcastingEntity = new LevelSpellcastingEntity();
    levelSpellcastingEntity.cantripsKnown = data.cantripsKnown;
    levelSpellcastingEntity.spellSlotsLevel1 = data.spell_slots_level_1;
    levelSpellcastingEntity.spellSlotsLevel2 = data.spell_slots_level_2;
    levelSpellcastingEntity.spellSlotsLevel3 = data.spell_slots_level_3;
    levelSpellcastingEntity.spellSlotsLevel4 = data.spell_slots_level_4;
    levelSpellcastingEntity.spellSlotsLevel5 = data.spell_slots_level_5;
    levelSpellcastingEntity.spellSlotsLevel6 = data.spell_slots_level_6;
    levelSpellcastingEntity.spellSlotsLevel7 = data.spell_slots_level_7;
    levelSpellcastingEntity.spellSlotsLevel8 = data.spell_slots_level_8;
    levelSpellcastingEntity.spellSlotsLevel9 = data.spell_slots_level_9;
    levelSpellcastingEntity.spellsKnown = data.spells_known;
    return levelSpellcastingEntity;
  }

  classSpecificDataToEntity(data: any): LevelClassSpecificEntity {
    if (!data) {
      return;
    }
    const classSpecificEntity = new LevelClassSpecificEntity();
    classSpecificEntity.actionSurges = data.action_surges;
    classSpecificEntity.arcaneRecoveryLevels = data.arcane_recovery_levels;
    classSpecificEntity.auraRange = data.aura_range;
    classSpecificEntity.bardicInspirationDie = data.bardic_inspiration_die;
    classSpecificEntity.brutalCriticalDice = data.brutal_critical_dice;
    classSpecificEntity.creatingSpellSlots = data.creating_spell_slots?.map(
      (spellSlot) => this.levelClassCreatingSpellSlotDataToEntity(spellSlot)
    );
    classSpecificEntity.destroyUndeadCr = data.destroy_undead_cr;
    classSpecificEntity.extraAttacks = data.extra_attacks;
    classSpecificEntity.favoredEnemies = data.favored_enemies;
    classSpecificEntity.favoredTerrain = data.favored_terrain;
    classSpecificEntity.indomitableUses = data.indomitable_uses;
    classSpecificEntity.invocationsKnown = data.invocations_known;
    classSpecificEntity.kiPoints = data.ki_points;
    classSpecificEntity.magicalSecretsMax5 = data.magical_secrets_max_5;
    classSpecificEntity.magicalSecretsMax7 = data.magical_secrets_max_7;
    classSpecificEntity.magicalSecretsMax9 = data.magical_secrets_max_9;
    classSpecificEntity.martialArts = this.optionsDiceDataToEntity(
      data.martial_arts
    );
    classSpecificEntity.metamagicKnown = data.metamagic_known;
    classSpecificEntity.mysticArcanumLevel6 = data.mystic_arcanum_level_6;
    classSpecificEntity.mysticArcanumLevel7 = data.mystic_arcanum_level_7;
    classSpecificEntity.mysticArcanumLevel8 = data.mystic_arcanum_level_8;
    classSpecificEntity.mysticArcanumLevel9 = data.mystic_arcanum_level_9;
    classSpecificEntity.rageCount = data.rage_count;
    classSpecificEntity.rageDamageBonus = data.rage_damage_bonus;
    classSpecificEntity.sneakAttack = this.optionsDiceDataToEntity(
      data.sneak_attack
    );
    classSpecificEntity.songOfRestDie = data.song_of_rest_die;
    classSpecificEntity.sorceryPoints = data.sorcery_points;
    classSpecificEntity.unarmoredMovement = data.unarmored_movement;
    classSpecificEntity.wildShapeFly = data.wild_shape_fly;
    classSpecificEntity.wildShapeMaxCr = data.wild_shape_max_cr;
    classSpecificEntity.wildShapeSwim = data.wild_shape_swim;

    return classSpecificEntity;
  }
  levelClassCreatingSpellSlotDataToEntity(
    data: any
  ): LevelClassCreatingSpellSlotsEntity {
    if (!data) {
      return;
    }
    const levelClassCreatingSpellSlotsEntity = new LevelClassCreatingSpellSlotsEntity();
    levelClassCreatingSpellSlotsEntity.sorceryPointCost =
      data.sorcery_point_cost;
    levelClassCreatingSpellSlotsEntity.spellSlotLevel = data.spell_slot_level;
    return levelClassCreatingSpellSlotsEntity;
  }

  subclassSpellDataToEntity(data: any): SubclassSpellEntity {
    if (!data) {
      return;
    }
    const spellEntity = new SubclassSpellEntity();
    spellEntity.spell = data.spell.name;
    spellEntity.prerequisites = data.prerequisites?.map(
      (prerequisite) => prerequisite.name
    );
    return spellEntity;
  }

  abilityBonusDataToEntity(data: any): AbilityScoreBonusEntity {
    if (!data) {
      return;
    }
    const bonusEntity = new AbilityScoreBonusEntity();
    bonusEntity.bonus = data.bonus;
    bonusEntity.name = data.ability_score.name;
    return bonusEntity;
  }

  optionsDataToEntity(option: any): OptionsEntity {
    if (!option) {
      return;
    }
    const optionsEntity = new OptionsEntity();
    optionsEntity.from = option.from?.map((optionFrom) => optionFrom.name);
    optionsEntity.choose = option.choose;
    optionsEntity.type = option.type;
    return optionsEntity;
  }

  optionsDiceDataToEntity(option: any): LevelOptionsDiceEntity {
    if (!option) {
      return;
    }
    const levelDiceEntity = new LevelOptionsDiceEntity();
    levelDiceEntity.diceCount = option.dice_count;
    levelDiceEntity.diceValue = option.dice_value;
    return levelDiceEntity;
  }
}
