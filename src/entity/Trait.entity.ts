import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { OptionsEntity } from "./Options.entity";

@Entity()
export class TraitEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name?: number;

  @Column("text", { array: true, nullable: true })
  subraces?: string[];

  @Column("text", { array: true, nullable: true })
  races?: string[];

  @Column("text", { array: true, nullable: true })
  description?: string[];

  @Column("text", { array: true, nullable: true })
  proficiencies?: string[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
  })
  @JoinTable()
  proficiencyChoices?: OptionsEntity[];
}
