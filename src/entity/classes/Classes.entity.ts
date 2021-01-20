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

@Entity()
export class ClassesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => LevelEntity, (level) => level.parentClass, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  classLevels?: LevelEntity[];

  @Column({ nullable: true })
  hit_die?: number;

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

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  spellcasting?: OptionsEntity;

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
  })
  @JoinColumn()
  startingEquipment?: OptionsEntity[];
}
