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
import { LevelClassEntity } from "../levels/LevelClass.entity";
import { OptionsEntity } from "../general/Options.entity";
import { ClassSpellcastingEntity } from "./ClassSpellcasting.entity";

@Entity()
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => LevelClassEntity, (level) => level.parentClass, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  classLevels?: LevelClassEntity[];

  @Column({ nullable: true })
  hitDie?: number;

  @Column({ unique: true })
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
