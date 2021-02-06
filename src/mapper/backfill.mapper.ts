import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDcEntity } from "../entity/spells/SpellDc.entity";
import { SpellAreaOfEffectEntity } from "../entity/spells/SpellAreaOfEffect.entity";
import { FeatureEntity } from "../entity/features/feature.entity";
import { PrerequisiteEntity } from "../entity/features/prerequisite.entity";
import { TraitDto } from "../dto/general/Trait.dto";
import { SpellsDto } from "../dto/spells/Spells.dto";
import { TraitEntity } from "../entity/general/Trait.entity";
import { OptionsEntity } from "../entity/general/Options.entity";
import { RaceEntity } from "../entity/races/Race.entity";
import { SubraceEntity } from "../entity/subraces/Subrace.entity";
import { AbilityScoreBonusDto } from "src/dto/general/AbilityScoreBonus.dto";
import { AbilityScoreBonusEntity } from "src/entity/general/AbilityScoreBonus.entity";
import {SubclassEntity} from "../entity/subclasses/Subclass.entity";
import {SubclassSpellEntity} from "../entity/subclasses/SubclassSpell.entity";

export class BackfillMapper {
  featureResponseToEntity(feature: any): FeatureEntity {
    const featureEntity = new FeatureEntity();
    featureEntity.name = feature.name;
    featureEntity.class = feature.class;
    featureEntity.subclass = feature.subclass;
    featureEntity.level = feature.level;
    featureEntity.group = feature.group;
    featureEntity.description = feature.desc;
    if (feature.prerequisites != null) {
      featureEntity.prerequisites = feature.prerequisites.map((prereq) => {
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
    spellEntity.classes = spell.classes.map((classObj) => classObj.name);
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
        optionsEntity.from = choice.from.map((choiceFrom) => choiceFrom.name);
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
    raceEntity.startingProficiencies = race.starting_proficiencies.map(
      (startingProf) => startingProf.name
    );
    raceEntity.startingProficiencyOptions = this.optionsDataToEntity(
      race.starting_proficiency_options
    );
    raceEntity.languages = race.languages.map((language) => language.name);
    raceEntity.languageOptions = this.optionsDataToEntity(
      race.language_options
    );
    raceEntity.languageDescription = race.language_desc;
    raceEntity.traits = race.traits.map((trait) => trait.name);
    raceEntity.traitOptions = this.optionsDataToEntity(race.trait_options);
    raceEntity.abilityBonuses = race.ability_bonuses.map((bonus) =>
      this.abilityBonusDataToEntity(bonus)
    );
    raceEntity.abilityBonusOptions = this.optionsDataToEntity(
      race.ability_bonus_options
    );
    raceEntity.subraces = race.subraces.map((subrace) => subrace.name);
    return raceEntity;
  }

  subraceResponseToEntity(subrace: any): SubraceEntity {
    const subraceEntity = new SubraceEntity();
    subraceEntity.name = subrace.name;
    subraceEntity.race = subrace.race.name;
    subraceEntity.description = subrace.desc;
    subraceEntity.abilityScoreBonuses = subrace.ability_bonuses.map(
      (bonus) => bonus.name
    );
    subraceEntity.startingProficiencies = subrace.starting_proficiencies.map(
      (startProf) => startProf.name
    );
    subraceEntity.languages = subrace.languages.map(
      (language) => language.name
    );
    subraceEntity.languageOptions = this.optionsDataToEntity(
      subrace.language_options
    );
    subraceEntity.racialTraits = subrace.racial_traits.map(
      (trait) => trait.name
    );
    subraceEntity.racialTraitOptions = this.optionsDataToEntity(
      subrace.racial_trait_options
    );
    return subraceEntity;
  }

  subclassResponseToEntity(subclass: any): SubclassEntity {
    const subclassEntity = new SubclassEntity();
    subclassEntity.class = subclass.class.name
    subclassEntity.name = subclass.name
    subclassEntity.subclassFlavor = subclass.subclass_flavor
    subclassEntity.description = subclass.desc
    subclassEntity.spells = subclass.spells.map(spell => spell.)
    subclassEntity.subclassLevels = subclass.//todoglkpn map subclass levels
    return subclassEntity;
  }

  subclassSpellDataToEntity(spelldata: any): SubclassSpellEntity {
    const spellEntity = SubclassSpellEntity;
    spellEntity.spell = spelldata.spell.name
    return spellEntity;
  }

  abilityBonusDataToEntity(bonuses: any): AbilityScoreBonusEntity {
    const bonusEntity = new AbilityScoreBonusEntity();
    bonusEntity.bonus = bonuses.bonus;
    bonusEntity.name = bonuses.ability_score.name;
    return bonusEntity;
  }

  optionsDataToEntity(options: any): OptionsEntity {
    const optionsEntity = new OptionsEntity();
    optionsEntity.from = options.from.map((optionFrom) => optionFrom.name);
    optionsEntity.choose = options.choose;
    optionsEntity.type = options.type;
    return optionsEntity;
  }
}
