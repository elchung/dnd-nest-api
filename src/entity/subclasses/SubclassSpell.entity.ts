import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { PrerequisiteEntity } from "../features/prerequisite.entity";

@Entity()
export class SubclassSpellEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  spell: string;

  @ManyToMany((type) => PrerequisiteEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  prerequisites?: PrerequisiteEntity[];
}
