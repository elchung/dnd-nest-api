import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDcEntity } from "../entity/spells/SpellDc.entity";
import { SpellAreaOfEffectEntity } from "../entity/spells/SpellAreaOfEffect.entity";
import { FeatureEntity } from "../entity/features/feature.entity";
import { PrerequisiteEntity } from "../entity/features/prerequisite.entity";

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
}
