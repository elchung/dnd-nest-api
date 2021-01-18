import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { OptionsEntity } from "../Options.entity";

@Entity()
export class ClassesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  class_levels?: string; // todo this is wrong

  @Column({ nullable: true })
  hit_die?: number;

  @Column({ nullable: true })
  name?: string;

  @Column("text", { array: true, nullable: true })
  proficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  saving_throws?: string[];

  @Column("text", { array: true, nullable: true })
  subclasses?: string[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
  })
  @JoinTable()
  proficiencyChoices?: OptionsEntity[];

  @OneToOne() //cascade
  @JoinTable()
  spellcasting?: OptionsEntity;

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
  })
  @JoinTable() //maybe. all optionsentities might need to be split into own tables....ugh
  starting_equipment?: OptionsEntity[];
}
