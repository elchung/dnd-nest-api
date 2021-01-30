import { ClassDto as ClassDto } from "src/dto/class/Class.dto";
import { ClassEntity } from "src/entity/classes/Class.entity";
import { ClassSpellcastingEntity } from "../entity/classes/ClassSpellcasting.entity";
import { ClassSpellcastingDto } from "../dto/class/ClassSpellcasting.dto";
import { InfoDto } from "../dto/general/Info.dto";
import { InfoEntity } from "../entity/general/Info.entity";
import { OptionsDto } from "../dto/general/Options.dto";
import { OptionsEntity } from "../entity/general/Options.entity";
import { LevelDto } from "../dto/levels/Level.dto";
import { LevelEntity } from "../entity/levels/Level.entity";

export class ClassMapper {
  classDtoToEntity(classDto: ClassDto): ClassEntity {
    const classEntity = new ClassEntity();
    classEntity.hitDie = classDto.hitDie;
    classEntity.name = classDto.name;
    classEntity.proficiencies = classDto.proficiencies;
    classEntity.savingThrows = classDto.savingThrows;
    classEntity.subclasses = classDto.subclasses;
    classEntity.startingEquipment = classDto.startingEquipment;
    classEntity.spellcasting = this.classSpellcastingDtoToEntity(
      classDto.spellcasting
    );
    classEntity.proficiencyChoices = classDto.proficiencyChoices.map((choice) =>
      this.optionsDtoToEntity(choice)
    );
    classEntity.classLevels = classDto.classLevels.map((classLevel) =>
      this.classLevelDtoToEntity(classLevel)
    );

    return classEntity;
  }

  classLevelDtoToEntity(classLevel: LevelDto): LevelEntity {
    const levelEntity = new LevelEntity();
    levelEntity.abilityScoreBonuses = classLevel.abilityScoreBonuses;
    levelEntity.class = classLevel.class;
    levelEntity.featureChoices = classLevel.featureChoices;
    levelEntity.features = classLevel.features;
    levelEntity.level = classLevel.level;
    levelEntity.proficiencyBonus = classLevel.proficiencyBonus;
    levelEntity.subclass = classLevel.subclass;

    //todo need to map rest of objects, then maybe refactor generic entity/dtos to their own mappers
    return levelEntity;
  }

  classSpellcastingDtoToEntity(
    spellcastingDto: ClassSpellcastingDto
  ): ClassSpellcastingEntity {
    const spellCastingEntity = new ClassSpellcastingEntity();
    spellCastingEntity.level = spellcastingDto.level;
    spellCastingEntity.spellcastingAbility =
      spellcastingDto.spellcastingAbility;
    spellCastingEntity.info = spellcastingDto.info.map((infoDto) =>
      this.infoDtoToEntity(infoDto)
    );

    return spellCastingEntity;
  }

  optionsDtoToEntity(optionsDto: OptionsDto): OptionsEntity {
    const optionsEntity = new OptionsEntity();
    optionsEntity.choose = optionsDto.choose;
    optionsEntity.from = optionsDto.from;

    return optionsEntity;
  }

  infoDtoToEntity(infoDto: InfoDto): InfoEntity {
    const infoEntity = new InfoEntity();
    infoEntity.description = infoDto.description;
    infoEntity.name = infoDto.name;

    return infoEntity;
  }

  classEntityToDto(classEntity: ClassEntity): ClassDto {
    const classDto = new ClassDto();

    return classDto;
  }
}
