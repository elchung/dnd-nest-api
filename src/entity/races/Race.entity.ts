import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OptionsEntity } from "../general/Options.entity";
import { AbilityScoreBonusEntity } from "../general/AbilityScoreBonus.entity";

@Entity()
export class RaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  languageOptions?: OptionsEntity;

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  traitOptions?: OptionsEntity;

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  startingProficiencyOptions?: OptionsEntity;

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  abilityBonusOptions?: OptionsEntity;

  @ManyToMany((type) => AbilityScoreBonusEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  abilityBonuses?: AbilityScoreBonusEntity[];

  @Column({ nullable: true })
  source: string;
}
