import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { ClassEntity } from "../classes/Class.entity";
import { LevelClassEntity } from "./LevelClass.entity";
import { LevelSpellcastingEntity } from "./LevelSpellcasting.entity";
import { LevelSubclassEntity } from "./LevelSubclass.entity";

@Entity()
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  abilityScoreBonuses: number;

  @Column({ nullable: true })
  class: string;

  @OneToOne(
    (type) => LevelClassEntity,
    (levelClass) => levelClass.parentLevel,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  @JoinColumn()
  classSpecific: LevelClassEntity;

  @Column("text", { array: true, nullable: true })
  featureChoices: string[];

  @Column("text", { array: true, nullable: true })
  features: string[];

  @Column({ nullable: true })
  level: number;

  @Column({ nullable: true })
  proficiencyBonus: number;

  @OneToOne(
    (type) => LevelSpellcastingEntity,
    (levelSpellcasting) => levelSpellcasting.parentLevel,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  @JoinColumn()
  spellcasting: LevelSpellcastingEntity;

  @Column({ nullable: true })
  subclass: string;

  @OneToOne((type) => LevelSubclassEntity, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  subclassSpecific: LevelSubclassEntity;

  @ManyToOne((type) => ClassEntity, (classes) => classes.classLevels)
  parentClass: ClassEntity;
}
