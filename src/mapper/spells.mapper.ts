import { SpellsDto } from "../dto/spells/Spells.dto";
import { SpellsEntity } from "../entity/spells/Spells.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageDto } from "../dto/spells/SpellDamage.dto";
import { SpellDamageAtLevelDto } from "../dto/spells/SpellDamageAtLevel.dto";

export class SpellsMapper {
  spellDtoToEntity(spellDto: SpellsDto): SpellsEntity {
    const spellEntity = new SpellsEntity();

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
    spellEntity.damage = this.spellDamageDtoToEntity(spellDto.damage);

    return spellEntity;
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
    spellDamageAtLevelEntity["1"] = spellDamageAtLevelDto["1"];
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
}
