import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { OptionsEntity } from "../general/Options.entity";
import { AbilityScoreBonusEntity } from "../general/AbilityScoreBonus.entity";

@Entity()
export class RaceEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name?: string;

  @Column()
  speed?: number;

  @Column({ nullable: true })
  alignment?: string;

  @Column({ nullable: true })
  age?: string;

  @Column()
  size?: string;

  @Column({ nullable: true })
  sizeDescription?: string;

  @Column({ nullable: true })
  languageDescription?: string;

  @Column("text", { array: true, nullable: true })
  startingProficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  languages?: string[];

  @Column("text", { array: true, nullable: true })
  subraces?: string[];

  @Column("text", { array: true, nullable: true })
  traits?: string[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  languageOptions?: OptionsEntity[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  traitOptions?: OptionsEntity[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  startingProficiencyOptions?: OptionsEntity[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  abilityBonusOptions?: OptionsEntity[];

  @ManyToMany((type) => AbilityScoreBonusEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  abilityBonuses?: AbilityScoreBonusEntity[];
}
