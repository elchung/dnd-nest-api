import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SubclassSpellEntity } from "./SubclassSpell.entity";
import { LevelClassEntity } from "../levels/LevelClass.entity";

@Entity()
export class SubclassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  class: string;

  @Column("text", { array: true, nullable: true })
  description: string[];

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  subclassFlavor: string;

  @OneToOne((type) => LevelClassEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  subclassLevels: LevelClassEntity;

  @ManyToMany((type) => SubclassSpellEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  spells: SubclassSpellEntity[];
}
