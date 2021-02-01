import { ClassDto as ClassDto } from "src/dto/class/Class.dto";
import { ClassEntity } from "src/entity/classes/Class.entity";
import { ClassSpellcastingEntity } from "../entity/classes/ClassSpellcasting.entity";
import { ClassSpellcastingDto } from "../dto/class/ClassSpellcasting.dto";
import { CommonMapper } from "./common.mapper";
import { LevelDto } from "../dto/levels/Level.dto";
import { LevelEntity } from "../entity/levels/Level.entity";
import { LevelSubclassDto } from "../dto/levels/LevelSubclass.dto";
import { LevelSubclassEntity } from "../entity/levels/LevelSubclass.entity";
import { LevelSpellcastingDto } from "../dto/levels/LevelSpellcasting.dto";
import { LevelSpellcastingEntity } from "../entity/levels/LevelSpellcasting.entity";
import { LevelClassDto } from "../dto/levels/LevelClass.dto";
import { LevelClassEntity } from "../entity/levels/LevelClass.entity";
import { LevelClassCreatingSpellSlotsDto } from "src/dto/levels/LevelClassCreatingSpellSlots.dto";
import { LevelClassCreatingSpellSlotsEntity } from "src/entity/levels/LevelClassCreatingSpellSlots.entity";

export class ClassMapper {
  private commonMapper = new CommonMapper();

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
      this.commonMapper.optionsDtoToEntity(choice)
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
    levelEntity.subclassSpecific = this.subclassSpecificDtoToEntity(
      classLevel.subclassSpecific
    );
    levelEntity.spellcasting = this.levelSpellcastingDtoToEntity(
      classLevel.spellcasting
    );
    levelEntity.classSpecific = this.levelClassDtoToEntity(
      classLevel.classSpecific
    );

    return levelEntity;
  }

  levelClassDtoToEntity(levelClassDto: LevelClassDto): LevelClassEntity {
    const levelClassEntity = new LevelClassEntity();
    levelClassEntity.actionSurges = levelClassDto.actionSurges;
    levelClassEntity.arcaneRecoveryLevels = levelClassDto.arcaneRecoveryLevels;
    levelClassEntity.auraRange = levelClassDto.auraRange;
    levelClassEntity.bardicInspirationDie = levelClassDto.bardicInspirationDie;
    levelClassEntity.brutalCriticalDice = levelClassDto.brutalCriticalDice;
    levelClassEntity.channelDivinityCharges =
      levelClassDto.channelDivinityCharges;
    levelClassEntity.destroyUndeadCr = levelClassDto.destroyUndeadCr;
    levelClassEntity.extraAttacks = levelClassDto.extraAttacks;
    levelClassEntity.favoredEnemies = levelClassDto.favoredEnemies;
    levelClassEntity.favoredTerrain = levelClassDto.favoredTerrain;
    levelClassEntity.indomitableUses = levelClassDto.indomitableUses;
    levelClassEntity.invocationsKnown = levelClassDto.invocationsKnown;
    levelClassEntity.kiPoints = levelClassDto.kiPoints;
    levelClassEntity.magicalSecretsMax5 = levelClassDto.magicalSecretsMax5;
    levelClassEntity.magicalSecretsMax7 = levelClassDto.magicalSecretsMax7;
    levelClassEntity.magicalSecretsMax9 = levelClassDto.magicalSecretsMax9;
    levelClassEntity.metamagicKnown = levelClassDto.metamagicKnown;
    levelClassEntity.mysticArcanumLevel6 = levelClassDto.mysticArcanumLevel6;
    levelClassEntity.mysticArcanumLevel7 = levelClassDto.mysticArcanumLevel7;
    levelClassEntity.mysticArcanumLevel8 = levelClassDto.mysticArcanumLevel8;
    levelClassEntity.mysticArcanumLevel9 = levelClassDto.mysticArcanumLevel9;
    levelClassEntity.rageCount = levelClassDto.rageCount;
    levelClassEntity.rageDamageBonus = levelClassDto.rageDamageBonus;
    levelClassEntity.songOfRestDie = levelClassDto.songOfRestDie;
    levelClassEntity.sorceryPoints = levelClassDto.sorceryPoints;
    levelClassEntity.unarmoredMovement = levelClassDto.unarmoredMovement;
    levelClassEntity.wildShapeFly = levelClassDto.wildShapeFly;
    levelClassEntity.wildShapeMaxCr = levelClassDto.wildShapeMaxCr;
    levelClassEntity.wildShapeSwim = levelClassDto.wildShapeSwim;
    levelClassEntity.sneakAttack = this.commonMapper.levelOptionsDiceDtoToEntity(levelClassDto.sneakAttack);
    levelClassEntity.martialArts = this.commonMapper.levelOptionsDiceDtoToEntity(levelClassDto.martialArts);
    levelClassEntity.creatingSpellSlots = levelClassDto.creatingSpellSlots.map(spellSlot => this.levelClassCreatingSpellSLotsDtoToEntity(spellSlot));
    
    return levelClassEntity;
  }

  levelClassCreatingSpellSLotsDtoToEntity(levelClassCreatingSpellSLotsDto: LevelClassCreatingSpellSlotsDto): LevelClassCreatingSpellSlotsEntity {
    const levelClassCreatingSpellSLotsEntity = new LevelClassCreatingSpellSlotsEntity();
    levelClassCreatingSpellSLotsEntity.sorceryPointCost = levelClassCreatingSpellSLotsDto.sorceryPointCost
    levelClassCreatingSpellSLotsEntity.sorceryPointCost = levelClassCreatingSpellSLotsDto.sorceryPointCost

    return levelClassCreatingSpellSLotsEntity;
  }

  levelSpellcastingDtoToEntity(
    levelSpellcastingDto: LevelSpellcastingDto
  ): LevelSpellcastingEntity {
    const levelSpellcastingEntity = new LevelSpellcastingEntity();
    levelSpellcastingEntity.cantripsKnown = levelSpellcastingDto.cantripsKnown;
    levelSpellcastingEntity.spellSlotsLevel1 =
      levelSpellcastingDto.spellSlotsLevel1;
    levelSpellcastingEntity.spellSlotsLevel2 =
      levelSpellcastingDto.spellSlotsLevel2;
    levelSpellcastingEntity.spellSlotsLevel3 =
      levelSpellcastingDto.spellSlotsLevel3;
    levelSpellcastingEntity.spellSlotsLevel4 =
      levelSpellcastingDto.spellSlotsLevel4;
    levelSpellcastingEntity.spellSlotsLevel5 =
      levelSpellcastingDto.spellSlotsLevel5;
    levelSpellcastingEntity.spellSlotsLevel6 =
      levelSpellcastingDto.spellSlotsLevel6;
    levelSpellcastingEntity.spellSlotsLevel7 =
      levelSpellcastingDto.spellSlotsLevel7;
    levelSpellcastingEntity.spellSlotsLevel8 =
      levelSpellcastingDto.spellSlotsLevel8;
    levelSpellcastingEntity.spellSlotsLevel9 =
      levelSpellcastingDto.spellSlotsLevel9;

    return levelSpellcastingEntity;
  }

  subclassSpecificDtoToEntity(
    levelSubclassDto: LevelSubclassDto
  ): LevelSubclassEntity {
    const levelSubclassEntity = new LevelSubclassEntity();
    levelSubclassEntity.additionalMagicalSecretsMaxLvl =
      levelSubclassDto.additionalMagicalSecretsMaxLvl;
    levelSubclassEntity.auraRange = levelSubclassDto.auraRange;

    return levelSubclassEntity;
  }

  classSpellcastingDtoToEntity(
    spellcastingDto: ClassSpellcastingDto
  ): ClassSpellcastingEntity {
    const spellCastingEntity = new ClassSpellcastingEntity();
    spellCastingEntity.level = spellcastingDto.level;
    spellCastingEntity.spellcastingAbility =
      spellcastingDto.spellcastingAbility;
    spellCastingEntity.info = spellcastingDto.info.map((infoDto) =>
      this.commonMapper.infoDtoToEntity(infoDto)
    );

    return spellCastingEntity;
  }

  classEntityToDto(classEntity: ClassEntity): ClassDto {
    const classDto = new ClassDto();
    // todo fill this out
    return classDto;
  }
}
