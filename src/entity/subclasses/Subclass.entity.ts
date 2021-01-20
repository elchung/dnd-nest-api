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
import { LevelSubclassEntity } from "../levels/LevelSubclass.entity";

@Entity()
export class SubclassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  class: string;

  @Column("text", { array: true, nullable: true })
  description: string[];

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  subclassFlavor: string;

  @OneToOne((type) => LevelSubclassEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  sublclassLevels: LevelSubclassEntity;

  @ManyToMany((type) => SubclassSpellEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  spells: SubclassSpellEntity[];
}
