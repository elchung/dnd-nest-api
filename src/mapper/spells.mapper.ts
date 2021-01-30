import { SpellsDto } from "../dto/spells/Spells.dto";
import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageDto } from "../dto/spells/SpellDamage.dto";
import { SpellDamageAtLevelDto } from "../dto/spells/SpellDamageAtLevel.dto";
import { SpellDcDto } from "../dto/spells/SpellDc.dto";
import { SpellDcEntity } from "../entity/spells/SpellDc.entity";
import { SpellAreaOfEffectEntity } from "../entity/spells/SpellAreaOfEffect.entity";
import { SpellAreaOfEffectDto } from "../dto/spells/SpellAreaOfEffect.dto";

export class SpellsMapper {
  spellDtoToEntity(spellDto: SpellsDto): SpellEntity {
    const spellEntity = new SpellEntity();

    spellEntity.name = spellDto.name;
    spellEntity.description = spellDto.description;
    spellEntity.higherLevel = spellDto.higherLevel;
    spellEntity.range = spellDto.range;
    spellEntity.components = spellDto.components;
    spellEntity.materials = spellDto.materials;
    spellEntity.ritual = spellDto.ritual;
    spellEntity.duration = spellDto.duration;
    spellEntity.concentration = spellDto.concentration;
    spellEntity.castingTime = spellDto.castingTime;
    spellEntity.level = spellDto.level;
    spellEntity.attackType = spellDto.attackType;
    spellEntity.school = spellDto.school;
    spellEntity.classes = spellDto.classes;
    if (spellDto.damage != null) {
      spellEntity.damage = this.spellDamageDtoToEntity(spellDto.damage);
    }
    if (spellDto.areaOfEffect != null) {
      spellEntity.areaOfEffect = this.spellAreaOfEffectDtoToEntity(
        spellDto.areaOfEffect
      );
    }
    if (spellDto.dc != null) {
      spellEntity.dc = this.spellDcDtoToEntity(spellDto.dc);
    }
    return spellEntity;
  }

  spellAreaOfEffectDtoToEntity(
    aoeDto: SpellAreaOfEffectDto
  ): SpellAreaOfEffectEntity {
    const spellAreaOfEffectEntity = new SpellAreaOfEffectEntity();
    spellAreaOfEffectEntity.size = aoeDto.size;
    spellAreaOfEffectEntity.type = aoeDto.type;

    return spellAreaOfEffectEntity;
  }

  spellDcDtoToEntity(dcDto: SpellDcDto | null): SpellDcEntity {
    const spellDcEntity = new SpellDcEntity();
    spellDcEntity.dcSuccess = dcDto?.dcSuccess;
    spellDcEntity.dcType = dcDto?.dcType;

    return spellDcEntity;
  }

  spellDamageDtoToEntity(spellDamageDto: SpellDamageDto): SpellDamageEntity {
    const spellDamageEntity = new SpellDamageEntity();
    spellDamageEntity.type = spellDamageDto.type;
    spellDamageEntity.atLevel = this.spellDamageAtLevelDtoToEntity(
      spellDamageDto.atLevel
    );

    return spellDamageEntity;
  }

  spellDamageAtLevelDtoToEntity(
    spellDamageAtLevelDto: SpellDamageAtLevelDto
  ): SpellDamageAtLevelEntity {
    const spellDamageAtLevelEntity = new SpellDamageAtLevelEntity();
    spellDamageAtLevelEntity["2"] = spellDamageAtLevelDto["2"];
    spellDamageAtLevelEntity["3"] = spellDamageAtLevelDto["3"];
    spellDamageAtLevelEntity["4"] = spellDamageAtLevelDto["4"];
    spellDamageAtLevelEntity["5"] = spellDamageAtLevelDto["5"];
    spellDamageAtLevelEntity["6"] = spellDamageAtLevelDto["6"];
    spellDamageAtLevelEntity["7"] = spellDamageAtLevelDto["7"];
    spellDamageAtLevelEntity["8"] = spellDamageAtLevelDto["8"];
    spellDamageAtLevelEntity["9"] = spellDamageAtLevelDto["9"];

    return spellDamageAtLevelEntity;
  }

  spellNamesEntityToList(spellList: SpellEntity[]): string[] {
    return spellList.map((spell) => spell.name);
  }
}
