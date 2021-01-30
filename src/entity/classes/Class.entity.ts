import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { LevelEntity } from "../levels/Level.entity";
import { OptionsEntity } from "../general/Options.entity";
import { ClassSpellcastingEntity } from "./ClassSpellcasting.entity";

@Entity()
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => LevelEntity, (level) => level.parentClass, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  classLevels?: LevelEntity[];

  @Column({ nullable: true })
  hitDie?: number;

  @Column({ nullable: true })
  name?: string;

  @Column("text", { array: true, nullable: true })
  proficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  savingThrows?: string[];

  @Column("text", { array: true, nullable: true })
  subclasses?: string[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
  })
  @JoinTable()
  proficiencyChoices?: OptionsEntity[];

  @OneToOne((type) => ClassSpellcastingEntity, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  spellcasting?: ClassSpellcastingEntity;

  @Column("text", { array: true, nullable: true })
  startingEquipment?: string[];
}
